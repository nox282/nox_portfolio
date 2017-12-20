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
public class ProjectController {

	@Autowired
	private ProjectRepository projectRepository;

    private final Logger log = LoggerFactory.getLogger(ProjectController.class);


	@RequestMapping(value = {"/projects", "/projects/"}, method = RequestMethod.GET)
	public ResponseEntity getProjects(){
		try {
			return ResponseEntity.ok(serializeProjects(projectRepository.findAll()));
		} catch(Exception e) {
			log.error(e.getMessage());
			return ResponseEntity.status(500).build();
		}
	}

	@RequestMapping(value = {"/project/{title}"}, method = RequestMethod.GET)
	public ResponseEntity getProject(@PathVariable String title){
		try {
			return ResponseEntity.ok(serializeProjects(Arrays.asList(projectRepository.findByTitle(title))));
		 } catch(Exception e) {
			log.error(e.getMessage());
			return ResponseEntity.status(500).build();
		}
	}

	private String serializeProjects(List<Project> projects) throws IOException{
		ByteArrayOutputStream out = new ByteArrayOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(out, projects);

        return new String(out.toByteArray(), StandardCharsets.UTF_8);
	}

}