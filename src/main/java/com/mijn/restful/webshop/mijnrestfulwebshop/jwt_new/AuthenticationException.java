package com.mijn.restful.webshop.mijnrestfulwebshop.jwt_new;

public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}