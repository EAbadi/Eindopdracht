package com.mijn.restful.webshop.mijnrestfulwebshop.products;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductsJpaRepository extends JpaRepository <Products , Long> {
    List <Products> findByTitle(String title);
}
