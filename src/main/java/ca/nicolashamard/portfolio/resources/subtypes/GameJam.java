package ca.nicolashamard.portfolio.resources.subtypes;

public class GameJam {
	private String jam;
	private String year;
	private String url;
	private String project;
	private String projectUrl;

	public GameJam(String jam, String year, String url, String project, String projectUrl){
		this.jam = jam;
		this.year = year;
		this.url = url;
		this.project = project;
		this.projectUrl = projectUrl;
	}

	public String getJam() { return this.jam; }
	public String getYear() { return this.year; }
	public String getUrl(){ return this.url; }
	public String getProject(){ return this.project; }
	public String getProjectUrl(){ return this.projectUrl; }
}