package ca.nicolashamard.portfolio.repositories;

import java.util.*;

import ca.nicolashamard.portfolio.resources.en.*;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ResumeENRepository extends MongoRepository<ResumeEN, String> {

}