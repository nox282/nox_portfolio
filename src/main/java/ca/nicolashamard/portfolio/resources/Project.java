package ca.nicolashamard.portfolio.resources;

import org.springframework.data.annotation.Id;

public class Project {

	@Id
	private String id;

	private String title;

	private String description;

	private String[] controls;

	private String note;

	private String url;

	private String sourceURL;

	private String imageURL;

	private String[] screenshots;

	private String videoURL;

	private Collaborator[] team;

	private String gameEngine;

	private String[] technologies;

	private String[] tags;

	public Project(){}

	public Project(String id, String title, String description, String[] controls, String note, String url, String sourceURL, String imageURL, String[] screenshots, String videoURL, Collaborator[] team, String gameEngine, String[] technologies, String[] tags){
		this.id = id;
		this.title = title;
		this.description = description;
		this.controls = controls;
		this.note = note;
		this.url = url;
		this.sourceURL = sourceURL;
		this.imageURL = imageURL;
		this.screenshots = screenshots;
		this.videoURL = videoURL ;
		this.team = team;
		this.gameEngine = gameEngine;
		this.technologies = technologies;
		this.tags = tags;
	}

	public String getId(){ return this.id; }
	public String getTitle() { return this.title; }
	public String getDescription() { return this.description; }
	public String[] getControls() { return this.controls; }
	public String getNote() { return this.note; }
	public String getUrl() { return this.url; }
	public String getSourceURL() { return this.sourceURL; }
	public String getImageURL() { return this.imageURL; }
	public String[] getScreenshots() { return this.screenshots; }
	public String getVideoURL() { return this.videoURL; }
	public Collaborator[] getTeam() { return this.team; }
	public String getGameEngine() { return this.gameEngine; }
	public String[] getTechnologies() { return this.technologies; }
	public String[] getTags() { return this.tags; }
}