package com.mijn.restful.webshop.mijnrestfulwebshop;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HelloWorld {



    @GetMapping("/hello-world")
    public String printHetWoord() {
        return "Hallo";
    }

    @GetMapping(path="/hello-world/{name}")
    public HelloWorldBean helloWorldPatheVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }
}
