package com.mijn.restful.webshop.mijnrestfulwebshop.categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class CategorieResource {

    @Autowired
    private CategorieHardCodedService categorieService;

    @GetMapping("/users/{username}/categories")
    public List<Categories> getAllCategories(@PathVariable String username) {
        return categorieService.findAll();

    }

    @GetMapping("/users/{username}/categories/{id}")
    public Categories getAllCategories(@PathVariable String username , @PathVariable long id) {
        return categorieService.findById(id);

    }

    // RESTful
    //DELETE /users/{username}/categories/{id}
    @DeleteMapping("/users/{username}/categories/{id}")
    public ResponseEntity<Void> deleteCategorie(
            @PathVariable String username, @PathVariable long id) {

        Categories categorie = categorieService.deleteById(id);
        if(categorie!=null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }


    // RESTful
    //Edit / Update a Categorie
    //Put /users/{username}/categories/{id}
    @PutMapping("/users/{username}/categories/{id}")
    public ResponseEntity<Categories> updateCategorie(
            @PathVariable String username, @PathVariable long id, @RequestBody Categories categorie) {
        Categories updatedCategorie = categorieService.save(categorie);

        //using the next statement gives us more options, we can change other response statusses
        return new ResponseEntity<Categories>(categorie, HttpStatus.OK);

    }


    @PostMapping("/users/{username}/categories")
    public ResponseEntity<Void> postCategorie(
            @PathVariable String username,  @RequestBody Categories categorie) {
        Categories createdCategorie = categorieService.save(categorie);

        //Location
        //Get current resource url
        //then append {id}
        // so the following statement: the id ("/{id}") will be replaced by createdCategorie.getId()
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCategorie.getId()).toUri();


        //using the next statement gives us more options, we can change other response statusses
        return ResponseEntity.created(uri).build();

    }

}
