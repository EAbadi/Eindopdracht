package com.mijn.restful.webshop.mijnrestfulwebshop.BasicAuth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BasicAuthenticationController {

    @GetMapping("/authenticate")
    public AuthenticationBean authentication() {
        return new AuthenticationBean("You're authenticated");
    }
}
