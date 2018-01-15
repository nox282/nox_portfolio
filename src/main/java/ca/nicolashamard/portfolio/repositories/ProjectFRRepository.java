package ca.nicolashamard.portfolio.repositories;

import java.util.*;

import ca.nicolashamard.portfolio.resources.fr.*;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectFRRepository extends MongoRepository<ProjectFR, String> {
}