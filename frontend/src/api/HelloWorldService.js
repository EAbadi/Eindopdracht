import axios from 'axios'

class HelloWorldService {

    executeHelloWordService() {
        // get() methode van promise returns altijd een promise
        // promise: aangeven wat er moet gebeuren als de methode succesvol wordt aangeroepen, in Welcome.jsx (waarin we voorlopig 
        // deze methode aanroepen)
        return axios.get('http://localhost:8080/test-admin-gedeelte')
    }


    executeHelloWorldPathVariableService(name) {
        

        return axios.get(`http://localhost:8080/test-admin-gedeelte/${name}`
        // ,
        // {
        //     headers : {
        //         authorization: basicAuthHeader
        //     }
        // }
         )
    
    
    
    
    }
}

export default new HelloWorldService()