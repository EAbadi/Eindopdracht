/*
********************************************
********************************************
Junior Programmeur: Ehsan Abadi
School: NOVI Hogeschool
Project: Eindopdracht
Opleiding: Bootcamp Fullstack Developer

********************************************
********************************************
*/


import React , {Component} from 'react'
import AuthenticationService from './AutheticationService.js'


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '' ,
            password: '',
            hasLoginFailed : false,
            successfullLogin: false
        }

        this.eventChangeManagen = this.eventChangeManagen.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    

    eventChangeManagen(event) {
        
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        ) 

        
    }

    loginClicked() {
        
    //Jwt:
    AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
        .then(
            (response) => {
               //console.log(response.data.accessToken)
                AuthenticationService.userLoginSucceededForJwt(this.state.username, response.data.accessToken, response.data.roles)
            
               this.props.history.push(`/welcome/${this.state.username}`)
               
            }   

        ).catch(
            () => {
                this.setState({hasLoginFailed : true})
                this.setState({successfullLogin : false})     
            }
    )

    }

    

    render() {
        return(
            <>
                <h1>Login</h1>
                <div className="container">
                    
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning"> De combinatie van e-mailadres en of wachtwoord is niet geldig.</div>}
                    {/*<ShowSuccessfullLoginMessage successfullLogin={this.state.successfullLogin} />*/}
                    {this.state.successfullLogin && <div> Login succeeded.</div>}
                    username: <input type="text" name="username" value={this.state.username} onChange={this.eventChangeManagen}/>
                    password: <input type="password" name="password" value={this.state.password} onChange={this.eventChangeManagen}/>
                    <button className="btn btn-success" onClick={this.loginClicked} >Login</button>
                </div>
            </>
        )
    }
    
}

export default Login