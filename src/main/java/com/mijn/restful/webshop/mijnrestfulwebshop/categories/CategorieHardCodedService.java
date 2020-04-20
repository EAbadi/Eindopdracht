package com.mijn.restful.webshop.mijnrestfulwebshop.categories;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

//We could use @Component but because this is a business service a better way to do is to use @Service
@Service
public class CategorieHardCodedService {
    private static List<Categories> categories = new ArrayList();
    private static long idCounter = 0;

    static {
        categories.add(new Categories(++idCounter, "Games", false));
        categories.add(new Categories(++idCounter, "Learn Angular too", false));
        categories.add(new Categories(++idCounter, "Computers", false));
    }

    public List<Categories> findAll() {
        return categories;
    }

    public Categories deleteById(long id) {

        Categories categorie = findById(id);

        if(categorie==null) return null;

        if(categories.remove((categorie))) {
            return categorie;
        }
        return null;
    }

    public Categories save(Categories category) {
        //if -1 or 0, then create a new categorie
        if(category.getId() == -1 || category.getId() == 0) {
            category.setId(++idCounter);
            categories.add(category);
        } else {
            deleteById(category.getId());
            categories.add(category);
        }
        return category;
    }

    public Categories findById(long id) {
        for(Categories categorie:categories) {
            if(categorie.getId() == id){
                return categorie;
            }
        }
        return null;
    }
}
