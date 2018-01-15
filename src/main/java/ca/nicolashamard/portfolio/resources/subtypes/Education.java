package ca.nicolashamard.portfolio.resources.subtypes;

public class Education {
	private String school;
	private String url;
	private String diploma;
	private String fromYear;
	private String toYear;

	public Education(String school, String url, String diploma, String fromYear, String toYear){
		this.school = school;
		this.url = url;
		this.diploma = diploma;
		this.fromYear = fromYear;
		this.toYear = toYear;
	}

	public String getSchool() { return this.school; }
	public String getUrl() { return this.url; }
	public String getDiploma() { return this.diploma; }
	public String getFromYear() { return this.fromYear; }
	public String getToYear() { return this.toYear; }
}