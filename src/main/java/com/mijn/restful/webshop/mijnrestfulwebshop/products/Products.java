package com.mijn.restful.webshop.mijnrestfulwebshop.products;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Products {

    public Products() {
    }

    public Products(Long id, String img, String title, double price, boolean inCart) {
        this.id = id;
        this.img = img;
        this.title = title;
        this.price = price;
        this.inCart = inCart;
    }


    @Id
    @GeneratedValue
    private Long id;
    private String img;
    private String title;
    private double price;
    private boolean inCart;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public boolean isInCart() {
        return inCart;
    }

    public void setInCart(boolean inCart) {
        this.inCart = inCart;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Products)) return false;

        Products products = (Products) o;

        if (Double.compare(products.price, price) != 0) return false;
        if (inCart != products.inCart) return false;
        if (!id.equals(products.id)) return false;
        if (!img.equals(products.img)) return false;
        return title.equals(products.title);
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = id.hashCode();
        result = 31 * result + img.hashCode();
        result = 31 * result + title.hashCode();
        temp = Double.doubleToLongBits(price);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (inCart ? 1 : 0);
        return result;
    }
}
