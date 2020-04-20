package com.mijn.restful.webshop.mijnrestfulwebshop.categories;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Categories {

    @Id
    @GeneratedValue
    private Long id;
    private String categorieNaam;
    private Boolean isActive;

    //If you want to have something as a requestbody, then you need to have a default constructor (with no arguments)
    public Categories() {

    }

    public Categories(Long id,  String categorieNaam, Boolean isActive) {
        this.id = id;
        this.categorieNaam = categorieNaam;
        this.isActive = isActive;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategorieNaam() {
        return categorieNaam;
    }

    public void setCategorieNaam(String categorieNaam) {
        this.categorieNaam = categorieNaam;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Categories that = (Categories) o;

        return id == that.id;
    }

    @Override
    public int hashCode() {
        return (int) (id ^ (id >>> 32));
    }
}
