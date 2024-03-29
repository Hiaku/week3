package rest;

import entities.Movie;
import utils.EMF_Creator;
import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import io.restassured.parsing.Parser;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.core.UriBuilder;
import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.grizzly.http.util.HttpStatus;
import org.glassfish.jersey.grizzly2.httpserver.GrizzlyHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;
import static org.hamcrest.Matchers.equalTo;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import utils.EMF_Creator.DbSelector;
import utils.EMF_Creator.Strategy;

//Uncomment the line below, to temporarily disable this test
//@Disabled
public class MovieResourceTest {

    private static final int SERVER_PORT = 7777;
    private static final String SERVER_URL = "http://localhost/api";
    //Read this line from a settings-file  since used several places
    private static final String TEST_DB = "jdbc:mysql://localhost:3307/movie_test";
    
    private static Movie movie1;
    static final URI BASE_URI = UriBuilder.fromUri(SERVER_URL).port(SERVER_PORT).build();
    private static HttpServer httpServer;
    private static EntityManagerFactory emf;

    static HttpServer startServer() {
        ResourceConfig rc = ResourceConfig.forApplication(new ApplicationConfig());
        return GrizzlyHttpServerFactory.createHttpServer(BASE_URI, rc);
    }

    @BeforeAll
    public static void setUpClass() {
        emf = EMF_Creator.createEntityManagerFactory(DbSelector.TEST, Strategy.DROP_AND_CREATE);

        //NOT Required if you use the version of EMF_Creator.createEntityManagerFactory used above        
        //System.setProperty("IS_TEST", TEST_DB);
        //We are using the database on the virtual Vagrant image, so username password are the same for all dev-databases
        
        httpServer = startServer();
        
        //Setup RestAssured
        RestAssured.baseURI = SERVER_URL;
        RestAssured.port = SERVER_PORT;
   
        RestAssured.defaultParser = Parser.JSON;
    }
    
    @AfterAll
    public static void closeTestServer(){
        //System.in.read();
         httpServer.shutdownNow();
    }
    
    // Setup the DataBase (used by the test-server and this test) in a known state BEFORE EACH TEST
    //TODO -- Make sure to change the script below to use YOUR OWN entity class
    @BeforeEach
    public void setUp() {
        EntityManager em = emf.createEntityManager();
        movie1 = new Movie(1978, "Lion King", "Lion", "Disney", 5);
        try {
            em.getTransaction().begin();
            em.createNamedQuery("Movie.deleteAllRows").executeUpdate();
            em.persist(movie1);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }
    
    //Tuesday Assignment
    //1
    @Test
    public void testServerIsUp() throws Exception {
        System.out.println("1. SERVER IS UP TEST");
        given().
            contentType("application/json").
            get("/movie/test").
        then().log().body().assertThat().
            statusCode(HttpStatus.OK_200.getStatusCode()).
            body("hello", equalTo("world"));
    }
    
    //2
    @Test
    public void testGetMovieCount() throws Exception{
        given().
                contentType("application/json").
                get("/movie/count").
        then().log().body().assertThat().
                statusCode(HttpStatus.OK_200.getStatusCode()).
                body("count", equalTo(1));
    }
    
    //3
    @Test
    public void testGetAllMovies() throws Exception{
        List<String> name = new ArrayList<>();
        name.add(movie1.getName());
        given().
            contentType("application/json").
            get("/movie/all").
        then().log().body().assertThat().
            statusCode(HttpStatus.OK_200.getStatusCode()).
            body("name", equalTo(name));
    }
    
    //4
    @Test
    public void testGetMovieByName() throws Exception{
        given().
                contentType("application/json").
                get("/movie/name/{name}", "Lion King").
        then().log().body().assertThat().
                statusCode(HttpStatus.OK_200.getStatusCode()).
                body("year", equalTo(movie1.getYear()));
    }
    
    //5
    @Test
    public void testGetMovieById() throws Exception{
        given().
                contentType("application/json").
                get("/movie/{id}", 1).
        then().log().body().assertThat().
                statusCode(HttpStatus.OK_200.getStatusCode()).
                body("name", equalTo(movie1.getName()));
    }
}
