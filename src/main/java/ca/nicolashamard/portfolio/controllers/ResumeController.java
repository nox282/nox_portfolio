package ca.nicolashamard.portfolio.controllers;

import java.util.*;
import java.io.*;
import java.nio.charset.*;
import java.nio.file.*;
import com.google.common.io.*;

import ca.nicolashamard.portfolio.resources.en.*;
import ca.nicolashamard.portfolio.resources.fr.*;
import ca.nicolashamard.portfolio.repositories.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import org.springframework.core.io.*;

import com.fasterxml.jackson.databind.*;

import org.slf4j.*;

@Controller
public class ResumeController {
	
	private final String FRResumePath = "/files/CV-FR.pdf";
	private final String ENResumePath = "/files/CV-EN.pdf";

	@Autowired
	private ResumeENRepository resumeEnRepository;

	@Autowired
	private ResumeFRRepository resumeFrRepository;

	private final Logger log = LoggerFactory.getLogger(ResumeController.class);

	@RequestMapping(value = {"/{lang}/resume"}, method = RequestMethod.GET)
	public ResponseEntity getResume(@PathVariable String lang) {
		try{
			if(lang.equals("English"))
				return ResponseEntity.ok(serializeResumeEN(resumeEnRepository.findAll()));
			else if (lang.equals("Francais")) 
				return ResponseEntity.ok(serializeResumeFR(resumeFrRepository.findAll()));
			else
				return ResponseEntity.status(404).build();
		} catch(Exception e) {
			log.error(e.getMessage());
			return ResponseEntity.status(500).build();
		}
	}

	@RequestMapping(value = {"/{lang}/resume/HamardNicolas-CV.pdf"}, method = RequestMethod.GET)
	public ResponseEntity downloadResume(@PathVariable String lang) {
		if(lang.equals("English"))
			return downloadResume(lang, ENResumePath);
		else if (lang.equals("Francais")) 
			return downloadResume(lang, FRResumePath);
		else
			return ResponseEntity.status(404).build();
	}

	private ResponseEntity downloadResume(String lang, String resourcePath) {
		try{
			Resource resource = new ClassPathResource(resourcePath);
			byte[] data = ByteStreams.toByteArray(resource.getInputStream());

    		return ResponseEntity.ok()
        		  		.headers(new HttpHeaders())
        		  		.contentLength(data.length)
        		  		.contentType(MediaType.parseMediaType("application/octet-stream"))
        		  		.body(data);
       	} catch(java.io.IOException e) {
       		log.error(e.getMessage());
       		return ResponseEntity.status(500).build();
       	} catch(Exception e) {
       		log.error(e.getMessage());
       		return ResponseEntity.status(500).build();
       	}
	}


	private String serializeResumeEN(List<ResumeEN> resumes) throws IOException{
		ByteArrayOutputStream out = new ByteArrayOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(out, resumes);

        return new String(out.toByteArray(), StandardCharsets.UTF_8);
	}

	private String serializeResumeFR(List<ResumeFR> resumes) throws IOException{
		ByteArrayOutputStream out = new ByteArrayOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(out, resumes);

        return new String(out.toByteArray(), StandardCharsets.UTF_8);
	}
}