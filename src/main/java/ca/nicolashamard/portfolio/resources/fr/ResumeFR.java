package ca.nicolashamard.portfolio.resources.fr;

import ca.nicolashamard.portfolio.resources.subtypes.*;
import org.springframework.data.annotation.Id;

public class ResumeFR {
	@Id
	private String id;
	private String firstname;
	private String lastname;
	private String pictureURL;
	private String location;
	private String[] languages;
	private String description;
	private Education[] education;
	private Employment[] employment;
	private GameJam[] gamejams;
	private String[] technologies;
	private Social[] socials;
	private String[] interestedIn;

	public ResumeFR(){}

	public ResumeFR (String id, String firstname, String lastname, String pictureURL, String location, String[] languages, String description, Education[] education, Employment[] employment, GameJam[] gamejams, String[] technologies, Social[] socials, String[] interestedIn) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.pictureURL = pictureURL;
		this.location = location;
		this.languages = languages;
		this.description = description;
		this.education = education;
		this.employment = employment;
		this.gamejams = gamejams;
		this.technologies = technologies;
		this.socials = socials;
		this.interestedIn = interestedIn;
	}

	public String getId() { return this.id; }
	public String getFirstname() { return this.firstname; }
	public String getLastname() { return this.lastname; }
	public String getPictureURL() { return this.pictureURL; }
	public String getLocation() { return this.location; }
	public String[] getLanguages() { return this.languages; }
	public String getDescription() { return this.description; }
	public Education[] getEducation() { return this.education; }
	public Employment[] getEmployment() { return this.employment; }
	public GameJam[] getGamejams() { return this.gamejams; }
	public String[] getTechnologies() { return this.technologies; }
	public Social[] getSocials() { return this.socials; }
	public String[] getInterestedIn() { return this.interestedIn; }
}