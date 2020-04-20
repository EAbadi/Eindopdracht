package com.mijn.restful.webshop.mijnrestfulwebshop.categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;


@RestController
@CrossOrigin(origins ="*")
public class CategorieJpaResource {

    @Autowired
    private CategorieHardCodedService categorieService;

    @Autowired
    private CategorieJpaRepository categorieJpaRepository;

    @GetMapping("/jpa/users/{username}/categories")
    public List<Categories> getAllCategories(@PathVariable String username) {
        return categorieJpaRepository.findAll();
        //return categorieService.findAll();

    }

    @GetMapping("/jpa/users/{username}/categories/{id}")
    public Categories getCategory(@PathVariable String username , @PathVariable long id) {

        return categorieJpaRepository.findById(id).get();
        //return categorieService.findById(id);

    }

    // RESTful
    //DELETE /users/{username}/categories/{id}
    @DeleteMapping("/jpa/users/{username}/categories/{id}")
    public ResponseEntity<Void> deleteCategorie(
            @PathVariable String username, @PathVariable long id) {

        categorieJpaRepository.deleteById(id);
        return ResponseEntity.noContent().build();

    }


    // RESTful
    //Edit / Update a Categorie
    //Put /users/{username}/categories/{id}
    @PutMapping("/jpa/users/{username}/categories/{id}")
    public ResponseEntity<Categories> updateCategorie(
            @PathVariable String username, @PathVariable long id, @RequestBody Categories categorie) {

        //categorie.setCategorieNaam(username);

        Categories updatedCategorie = categorieJpaRepository.save(categorie);

        //using the next statement gives us more options, we can change other response statusses
        return new ResponseEntity<Categories>(categorie, HttpStatus.OK);

    }


    @PostMapping("/jpa/users/{username}/categories")
    public ResponseEntity<Void> createCategorie(
            @PathVariable String username,  @RequestBody Categories categorie) {

        //categorie.setCategorieNaam(username);
        Categories createdCategorie = categorieJpaRepository.save(categorie);

        //Location
        //Get current resource url
        //then append {id}
        // so the following statement: the id ("/{id}") will be replaced by createdCategorie.getId()
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCategorie.getId()).toUri();


        //using the next statement gives us more options, we can change other response statusses
        return ResponseEntity.created(uri).build();

    }

//    public WebMvcConfigurer configure() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/*").allowedOrigins("*");
//            }
//        };
//    }

}
