package ca.nicolashamard.portfolio.resources;

import org.springframework.data.annotation.Id;

public class Project {

	@Id
	private String id;

	private String title;

	private String description;

	private String url;

	private String imageURL;

	private String[] screenshots;

	private String videoURL;

	public Project(){}

	public Project(String id, String title, String description, String url, String imageURL, String[] screenshots, String videoURL){
		this.id = id;
		this.title = title;
		this.description = description;
		this.url = url;
		this.imageURL = imageURL;
		this.screenshots = screenshots;
		this.videoURL = videoURL;
	}

	public String getId(){ return this.id; }
	public String getTitle() { return this.title; }
	public String getDescription() { return this.description; }
	public String getUrl() { return this.url; }
	public String getImageURL() { return this.imageURL; }
	public String[] getScreenshots() { return this.screenshots; }
	public String getVideoURL() { return this.videoURL; }
}