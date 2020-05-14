import React , {Component} from 'react'
import AutheticationService from './AutheticationService.js'
import {Route , Redirect} from 'react-router-dom'

class AuthenticatedRoute extends Component {
    render() {
        
            if(AutheticationService.isUserLoggedIn()) {
               return <Route {...this.props} />
            } else {
               return <Redirect to="/login" />
            }
        
    }
}
export default AuthenticatedRoute