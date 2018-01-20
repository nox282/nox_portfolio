# Prerequisites
- Java 1.8+
- Maven 3.0+
- MongoDB 3.6+
# Setup
Setup your MongoDB as you please.

In order to let your spring-boot application connect with your database, you will need to add an `application.properties` file under `src/main/resources/` with the following lines :

`spring.data.mongodb.uri=mongodb://[user]:[password]@uri/?[options]`
`spring.thymeleaf.mode=LEGACYHTML5` 

## Run
Run project with `mvn clean spring-boot:run`. You can also build a .jar file under `target/` with `mvn package`.