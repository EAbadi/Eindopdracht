package com.mijn.restful.webshop.mijnrestfulwebshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class MijnRestfulWebshopApplication {

	public static void main(String[] args) {

//		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//
//
//		for(int i = 1 ; i<10 ; i++) {
//			String encodedString = encoder.encode("Test1979Test1979");
//			System.out.println(encodedString);
//		}

		SpringApplication.run(MijnRestfulWebshopApplication.class, args);
	}

}
