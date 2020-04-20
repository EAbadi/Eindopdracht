package com.mijn.restful.webshop.mijnrestfulwebshop;

import org.springframework.stereotype.Component;


public class HelloWorldBean {
    public HelloWorldBean(String message ) {
        this.message = message;
    }

    private String message;

    public String getMessage() {
        return message;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
