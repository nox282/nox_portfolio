package ca.nicolashamard.portfolio.resources;

import org.springframework.data.annotation.Id;

public class Collaborator {

	private String name;
	private String url;

	public Collaborator(String name, String url) {
		this.name = name;
		this.url = url;
	}

	public String getName() { return this.name; }
	public String getUrl() { return this.url; }
}