import axios from 'axios'
import {API_URL} from '../Constants.js'

class ProductDataService {
    
    retrieveAllProducts() {
      
        return axios.get(`${API_URL}/products2`)

    }

    retrieveProduct(id) {
        return axios.get(`${API_URL}/products2/${id}`)

    }

    deleteProduct(id) {
        return axios.delete(`${API_URL}/products2/${id}`)

    }


    updateProduct(id, product) {
        return axios.put(`${API_URL}/products2/${id}`, product)

    }

    createProduct(product) {
        return axios.post(`${API_URL}/products2/`, product)

    }



}

export default new ProductDataService()