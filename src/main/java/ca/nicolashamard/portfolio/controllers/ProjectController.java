package ca.nicolashamard.portfolio.controllers;

import java.util.*;
import java.io.*;
import java.nio.charset.*;

import ca.nicolashamard.portfolio.resources.en.*;
import ca.nicolashamard.portfolio.resources.fr.*;
import ca.nicolashamard.portfolio.repositories.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import com.fasterxml.jackson.databind.*;

import org.slf4j.*;

@Controller
public class ProjectController {

	@Autowired
	private ProjectENRepository projectEnRepository;

	@Autowired
	private ProjectFRRepository projectFrRepository;

    private final Logger log = LoggerFactory.getLogger(ProjectController.class);


	@RequestMapping(value = {"/{lang}/projects", "/{lang}/projects/"}, method = RequestMethod.GET)
	public ResponseEntity getProjects(@PathVariable String lang){
		try {
			if(lang.equals("English"))
				return ResponseEntity.ok(serializeProjectsEN(projectEnRepository.findAll()));
			else if(lang.equals("Francais"))
				return ResponseEntity.ok(serializeProjectsFR(projectFrRepository.findAll()));
			else
				return ResponseEntity.status(404).build();
		} catch(Exception e) {
			log.error(e.getMessage());
			return ResponseEntity.status(500).build();
		}
	}

	private String serializeProjectsEN(List<ProjectEN> projects) throws IOException{
		ByteArrayOutputStream out = new ByteArrayOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(out, projects);

        return new String(out.toByteArray(), StandardCharsets.UTF_8);
	}

	private String serializeProjectsFR(List<ProjectFR> projects) throws IOException{
		ByteArrayOutputStream out = new ByteArrayOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(out, projects);

        return new String(out.toByteArray(), StandardCharsets.UTF_8);
	}
}