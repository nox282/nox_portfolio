package ca.nicolashamard.portfolio.resources;

import org.springframework.data.annotation.Id;

public class Employment {

	private String company;
	private String jobTitle;
	private String location;
	private String description;
	private String from;
	private String to;

	public Employment(String company, String jobTitle, String location, String description, String from, String to){
		this.company = company;
		this.jobTitle = jobTitle;
		this.location = location;
		this.description = description;
		this.from = from;
		this.to = to;		
	}

	public String getCompany() { return this.company; }
	public String getJobTitle() {return this.jobTitle; }
	public String getLocation() {return this.location; }
	public String getDescription() {return this.description; }
	public String getFrom() { return this.from; }
	public String getTo() {	return this.to; }
}