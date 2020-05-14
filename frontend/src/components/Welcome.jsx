import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../api/HelloWorldService.js'

class Welcome extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            welcomeMessage : '' 
        }

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
        this.naarCategories = this.naarCategories.bind(this)
    }
    
    render() {
        return (
            <>
                <div className="container">
                    Welcome {this.props.match.params.name}! Manage <Link to="/categories">categories</Link>! 
                    </div>
                <div className="container"> 
                Click here to get a message from back-end service:
                <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Back-End Message</button> 
                <button onClick={() => this.props.history.push("/testWeg")} className="btn btn-success">Click to go to TestWeg component</button> 
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
                
            </>
        )
    }

    retrieveWelcomeMessage() {

        //HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        HelloWorldService.executeHelloWordService()
        //.then(responseResultaat => this.handleSuccessfulResponse(responseResultaat))
        .then(response =>  this.setState({
            welcomeMessage : response.data
        }))
        .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response) {

        this.setState({
            welcomeMessage : response.data.message
        })
    }

    handleError(error) {
        console.log(error.response)
        let errorMessage = ""
        if(error.message) {
            errorMessage+=error.message
        }
        if(error.response && error.response.data) {
            errorMessage+=error.response.data.message
        }
        this.setState(
            {
                welcomeMessage: errorMessage
            }
        )
    }

    naarCategories() {
        this.props.history.push(`/users/${this.props.match.params.name}/categories`)
    }
} 
export default Welcome