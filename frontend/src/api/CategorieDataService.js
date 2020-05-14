import axios from 'axios'
import {JPA_API_URL} from '../Constants.js'

class CategorieDataService {
    
    retrieveAllCategories(name) {
        // let username = 'test'
        // let password = 'test'
        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password) 
        return axios.get(`${JPA_API_URL}/users/${name}/categories`
        //  , 
        // {
        //     headers : {
        //         authorization: basicAuthHeader
        //     }
        // }
        
        )

    }

    retrieveCategorie(name, id) {
        return axios.get(`${JPA_API_URL}/users/${name}/categories/${id}`)

    }

    deleteCategory(name, id) {
        return axios.delete(`${JPA_API_URL}/users/${name}/categories/${id}`)

    }


    updateCategory(name, id, category) {
        return axios.put(`${JPA_API_URL}/users/${name}/categories/${id}`, category)

    }

    createCategory(name, category) {
        return axios.post(`${JPA_API_URL}/users/${name}/categories/`, category)

    }



}

export default new CategorieDataService()