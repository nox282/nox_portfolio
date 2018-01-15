package ca.nicolashamard.portfolio.resources.subtypes;

public class Employment {

	private String company;
	private String jobTitle;
	private String location;
	private String[] experience;
	private String from;
	private String to;

	public Employment(String company, String jobTitle, String location, String[] experience, String from, String to){
		this.company = company;
		this.jobTitle = jobTitle;
		this.location = location;
		this.experience = experience;
		this.from = from;
		this.to = to;		
	}

	public String getCompany() { return this.company; }
	public String getJobTitle() {return this.jobTitle; }
	public String getLocation() {return this.location; }
	public String[] getExperience() {return this.experience; }
	public String getFrom() { return this.from; }
	public String getTo() {	return this.to; }
}