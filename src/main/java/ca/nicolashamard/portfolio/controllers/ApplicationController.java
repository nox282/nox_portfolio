package ca.nicolashamard.portfolio.controllers;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.ui.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@Controller
public class ApplicationController {

 	@RequestMapping(value = {"/"}, method = RequestMethod.GET)
	public String index(Model model) {
		return "index";
	}
}