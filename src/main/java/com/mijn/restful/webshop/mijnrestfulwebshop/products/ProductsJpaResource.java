package com.mijn.restful.webshop.mijnrestfulwebshop.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins ="*")
public class ProductsJpaResource {

    @Autowired
    private ProductsJpaRepository productsJpaRepository;

    @GetMapping("/products2")
    public List<Products> getAllProducts() {
        return productsJpaRepository.findAll();
    }
    @GetMapping("/products2/{id}")
    public Products getProduct(@PathVariable Long id) {

        return productsJpaRepository.findById(id).get();

    }

    @DeleteMapping("/products2/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {

        productsJpaRepository.deleteById(id);
        return ResponseEntity.noContent().build();

    }

    @PutMapping("/products2/{id}")
    public ResponseEntity<Products> updateProduct(
            @PathVariable Long id, @RequestBody Products product) {

        //categorie.setCategorieNaam(username);

        Products updatedProduct = productsJpaRepository.save(product);

        //using the next statement gives us more options, we can change other response statusses
        return new ResponseEntity<Products>(product, HttpStatus.OK);

    }

    @PostMapping("/products2")
    public ResponseEntity<Void> createProduct(
            @RequestBody Products product) {

        //categorie.setCategorieNaam(username);
        Products createdProduct = productsJpaRepository.save(product);

        //Location
        //Get current resource url
        //then append {id}
        // so the following statement: the id ("/{id}") will be replaced by createdCategorie.getId()
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdProduct.getId()).toUri();


        //using the next statement gives us more options, we can change other response statusses
        return ResponseEntity.created(uri).build();

    }

//    public WebMvcConfigurer configure() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/*").allowedOrigins("http://localhost:3000");
//            }
//        };
//    }
}
