package ca.nicolashamard.portfolio.controllers;

import java.util.*;
import java.io.*;
import java.nio.charset.*;

import ca.nicolashamard.portfolio.resources.*;
import ca.nicolashamard.portfolio.repositories.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import com.fasterxml.jackson.databind.*;

import org.slf4j.*;

@Controller
public class ResumeController {
	
	@Autowired
	private ResumeRepository resumeRepository;

	private final Logger log = LoggerFactory.getLogger(ResumeRepository.class);

	@RequestMapping(value = {"/{lang}/resume"}, method = RequestMethod.GET)
	public ResponseEntity getResume(@PathVariable String lang) {
		try{
			return ResponseEntity.ok(serializeResume(resumeRepository.findAll()));
		} catch(Exception e) {
			log.error(e.getMessage());
			return ResponseEntity.status(500).build();
		}
	}

	private String serializeResume(List<Resume> resumes) throws IOException{
		ByteArrayOutputStream out = new ByteArrayOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(out, resumes);

        return new String(out.toByteArray(), StandardCharsets.UTF_8);
	}

}