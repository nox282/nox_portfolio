package ca.nicolashamard.portfolio.repositories;

import java.util.*;

import ca.nicolashamard.portfolio.resources.*;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ResumeRepository extends MongoRepository<Resume, String> {

}