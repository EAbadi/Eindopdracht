import React , {Component} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
//import moment from 'moment'
//import retrieveCategorie from '../api/CategorieDataService.js'
import AuthenticationService from './AutheticationService.js'
import CategorieDataService from '../api/CategorieDataService.js'

class Category extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id : this.props.match.params.id ,
            description : 'Learn forms' ,
            active : false
        }

        this.onSubmitMethode = this.onSubmitMethode.bind(this)
        this.validateMethode = this.validateMethode.bind(this)

    }

    componentDidMount() {


        //with the next if statement we say if id is -1, then don't retrieve category (we want to create a new category)
        if(this.state.id===-1) {
            return
        }


        let username = AuthenticationService.getLoggedInUserName()
        

        CategorieDataService.retrieveCategorie(username , this.state.id)
       
        .then(response => this.setState(
            {
                
       
                description: response.data.categorieNaam,
                active: response.data.active

             }
         )
        
         )
    }

    validateMethode(values) {
        let errors = {}
        if(!values.description) {
            errors.description = 'Enter a description'
        } else if (values.description.length<5) {
            errors.description = 'Enter at least 5 characters'
        }
        if(!values.active) {
            errors.active = "Enter false or true"
        }
        return errors
    }

    onSubmitMethode(values) {
        let username = AuthenticationService.getLoggedInUserName()

        if(this.state.id===-1) {

            CategorieDataService.createCategory(username, {
                id: this.state.id , 
                categorieNaam: values.description,
                active: values.active
            }).then(() => this.props.history.push(`/jpa/users/${AuthenticationService.getLoggedInUserName()}/categories`))

        } else {

            CategorieDataService.updateCategory(username, this.state.id, {
                id: this.state.id , 
                categorieNaam: values.description,
                active: values.active
            }).then(() => this.props.history.push(`/jpa/users/${AuthenticationService.getLoggedInUserName()}/categories`))
            .catch(response => {
                console.log('foutmelding: ' + response.message)   
            })
    
    }
   
        //console.log(values) //here we can see what values are being submitted
    }

   

    render() {
        
        let {description, active} = this.state

        return(
            <div>
                <h1>Test</h1>
                <div className="container">
                    
                
                <Formik 
                    initialValues={{description, active}} 
                    onSubmit={this.onSubmitMethode} 
                    validate={this.validateMethode}
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}
                    >              
                
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="active" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group"> 
                                        <label> Description </label> 
                                        
                                        <Field className="form-control" type="text" name="description" /> 
                                    </fieldset>	
                                    <fieldset className="form-group"> 
                                        <label> Active </label>
                                        <Field className="form-control" type="text" name="active" /> 

                                    

                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>

                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}
export default Category