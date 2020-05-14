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
import React , {Component} from 'react';
import CategorieDataService from '../api/CategorieDataService.js'
import AuthenticationService from '../components/AutheticationService.js'

class Categories extends Component {

  constructor(){
    super()
    this.state = {
      lijstCategories : [] ,
      message: null
     
    }

    this.deleteCategoriesClicked = this.deleteCategoriesClicked.bind(this)
    this.refreshCategories = this.refreshCategories.bind(this)
    this.updateCategoriesClicked = this.updateCategoriesClicked.bind(this)
    this.addNewCategoryClicked = this.addNewCategoryClicked.bind(this)
  }

  componentDidMount() {

    this.refreshCategories()
    
  }

  refreshCategories() {

    let username = AuthenticationService.getLoggedInUserName()
    CategorieDataService.retrieveAllCategories(username)
    .then( 
      response => { 
        console.log(response); this.setState({lijstCategories : response.data})
      }
      )
  }

  deleteCategoriesClicked(id) {
    let username = AuthenticationService.getLoggedInUserName()
    CategorieDataService.deleteCategory(username, id)
    .then(
      response => {
        this.setState({message : `Category met id ${id} verwijderd.`})
        this.refreshCategories()
      }
    ).catch(
      response => {
        console.log('er is iets foutgegaan in deleteCategoriesClicked in Categories.jsx: ' + response)

      } )
  }

  updateCategoriesClicked(id) {
    this.props.history.push(`/users/${AuthenticationService.getLoggedInUserName()}/categories/${id}`)
  }

  addNewCategoryClicked() {
    this.props.history.push(`/users/${AuthenticationService.getLoggedInUserName()}/categories/-1`)
  }


    render() {
      return (
        <div className="Categories">
          <h1> Manage Categories </h1>
          {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
          <div className="container">
            <table className="table">
              <thead>
                <tr>
               
                  <th>Categories</th>
                  <th>Active</th>
                  <th>Update</th>
                  <th>Delete</th>
                  
                </tr>
              </thead>
              <tbody>
              { 
              this.state.lijstCategories.map ( cat =>
                <tr key={cat.id}>
                  
                  <td>{cat.categorieNaam}</td>
                  <td>{cat.active.toString()}</td>
                  <td><button className="btn btn-success" onClick={() => this.updateCategoriesClicked(cat.id)}>Update</button></td>
                  <td><button className="btn btn-warning" onClick={() => this.deleteCategoriesClicked(cat.id)}>Delete</button></td>
                </tr>
                )
              }
              </tbody>
            </table>
            
            <div className="row">
              <button className="btn btn-success" onClick={this.addNewCategoryClicked}>Add new category</button>
            </div>
          
          </div>
        </div>
      );
    }
}

export default Categories;