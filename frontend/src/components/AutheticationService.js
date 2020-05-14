import axios from 'axios'
//import {API_URL} from '../Constants.js'

export const USERNAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const ROLE = 'role'

class AuthenticationService {
    

    // executeBasicAuthenticationService(username, password) {
    //     return axios.get(`${API_URL}/authenticatie`, 
    //     {headers: {Authorization: this.createBasicAuthToken(username, password)}})
    // }

    


    //Jwt
    executeJwtAuthenticationService(username, password) {
        
        //return axios.post(`${API_URL}/authenticate`, 
        return axios.post('http://localhost:8080/api/auth/signin', 
        {
            username,
            password
        }
        
        )
    }


    // createBasicAuthToken(username, password) {
    //     return 'Basic ' + window.btoa(username + ":" + password)

    // }

    // userLoginSucceeded (username, password) {
    //     sessionStorage.setItem(USERNAME_SESSION_ATTRIBUTE_NAME, username)
    //     this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    //     //window.location.replace(`/welcome/${username}`);
        
        
    // }

    userLoginSucceededForJwt(username, token, role) {
        sessionStorage.setItem(USERNAME_SESSION_ATTRIBUTE_NAME, username)
        sessionStorage.setItem(ROLE, role)
        this.setupAxiosInterceptors(this.createJwtToken(token))

    }

    createJwtToken(token) {
        return 'Bearer ' + token

    }

    logout () {
        console.log('de logout() methode aangeroepen')
        sessionStorage.removeItem(USERNAME_SESSION_ATTRIBUTE_NAME)
        sessionStorage.removeItem('role')
        window.location.replace("/");
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USERNAME_SESSION_ATTRIBUTE_NAME)
        if(user === null ) return false
        return true
    }

    isUserAdmin() {
        let role = sessionStorage.getItem('role')
        if(role) {
        if(role.includes('ROLE_ADMIN')) {
            return "admin"
        }
        else {
            return "user"
        }
    } else {
        console.log("role is empty")
    }
       // if (Object.values(sessionStorage.getItem('role')).includes('ADMIN')) {
         //   return true;
        //} else { 
          //  return false;
        //}

        

    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USERNAME_SESSION_ATTRIBUTE_NAME)
        if(user === null ) return ''
        return user
    }

    setupAxiosInterceptors(token) {
        // let username = 'test'
        // let password = 'test'
        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password) 
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization =  token
                
            }
            return config
        } 
        )
    }

}

//For React componenten exporteren we de class directly, maar hier bij een javascript file
// exporteren we een instance van AuthenticationService
export default new AuthenticationService()