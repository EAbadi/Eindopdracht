package com.mijn.restful.webshop.mijnrestfulwebshop.categories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategorieJpaRepository extends JpaRepository <Categories , Long> {
    List<Categories> findByCategorieNaam(String categorieNaam);
}
