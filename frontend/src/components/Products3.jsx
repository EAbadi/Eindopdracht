import React, { Component } from 'react';

import ProductDataService from '../api/ProductDataService.js'
import AutheticationService from './AutheticationService.js'
//import mijnCart from './mijnCart.jsx';


class Products3 extends Component {

    constructor(props){
        super(props)
        this.state = {
          lijstProducts : [] ,
          message: null,
          cartProductId : [],
          btnDisable: false     
        }

        this.deleteProductClicked = this.deleteProductClicked.bind(this)
        this.refreshProducts = this.refreshProducts.bind(this)
        this.updateProductClicked = this.updateProductClicked.bind(this)
        this.addNewProductClicked = this.addNewProductClicked.bind(this)
        this.testChekoutClicked = this.testChekoutClicked.bind(this)
       
    }

    componentDidMount() {

        this.refreshProducts()
    
        
        
      }

        refreshProducts() {

            ProductDataService.retrieveAllProducts()
            .then( 
              response => { 
                this.setState({lijstProducts : response.data})
              }
              )
          }
        
          deleteProductClicked(id) {
            
            ProductDataService.deleteProduct(id)
            .then(
              response => {
                this.setState({message : `Product met id ${id} verwijderd.`})
                this.refreshProducts()
              }
            ).catch(
              response => {
                console.log('er is iets foutgegaan in deleteProductClicked in ProductList2.js: ' + response)
        
              } )
          }
        
          updateProductClicked(id) {
            this.props.history.push(`/products2/${id}`)
          }
        
          addNewProductClicked() {
            this.props.history.push(`/products2/-1`)
          }

          testAddToCart = (param) => {

           //let encodedParam = window.btoa(param);

            this.setState({
              
              cartProductId: [...this.state.cartProductId, param]
              
            },
            () => {

            console.log("Original cartProductId array object: " + this.state.cartProductId)
      
            }
            )


            /*
            let titleEncoded = window.btoa(title);
            let imgEncoded = window.btoa(img);

            
            this.setState({
              
              cartProductId: [...this.state.cartProductId, {id: param, title: titleEncoded, img: imgEncoded}]
              
            },
            () => {

            console.log("Original cartProductId array object: " + this.state.cartProductId)
      

            */

            //let buff = []
            //buff = Buffer.from(this.state.cartProductId, 'base64');  
            //console.log(buff)
            //let text = buff.toString('utf-8');

            
            //let buffCartIds = new Buffer(this.state.cartProductId);
            //let base64databuffCartIds = buffCartIds.toString('base64');
            //console.log("cartProductId array encoded: " + base64databuffCartIds )

            //let toJSONDecoded = [Buffer.from(base64databuffCartIds, 'base64').toJSON()];
            //console.log("cartProductId array, let toJSONDecoded: " + toJSONDecoded);




              //console.log("De product id in de cart is: " + this.state.cartProductId )
             
              
              
/*
              
              this.state.cartProductId.map( result => {
                //console.log(result.id);
                //console.log(result.title);
                //console.log(result.img);
                
                //let buff = new Buffer(result.title);
                //let base64data = buff.toString('base64');

                console.log("title encoded met behulp van window.btoa(str): "+ result.title)
                console.log("title decoded met behulp van window.atob(enc): "+ window.atob(result.title))

                console.log("image encoded met behulp van window.btoa(str): "+ result.img)
                console.log("image decoded met behulp van window.atob(enc): "+ window.atob(result.img))


                //console.log("title decoded from base64 to string: " + Buffer.from(base64data, 'base64').toString('ascii'));
                

           } 
           
              
            ) */
            

          
        }

          testChekoutClicked() {
            //let mijnArray = this.state.cartProductId;

            //let objJsonStr = JSON.stringify(this.state.cartProductId);
            //let objJsonB64 = Buffer.from(objJsonStr).toString("base64");


            //let buff = new Buffer(this.state.cartProductId);
            //let base64data = buff.toString('base64');
            
            //this.props.history.push(`/products2/checkout/${window.btoa(this.state.cartProductId)}`)
            this.props.history.push(`/products2/checkout/${this.state.cartProductId}`)
            //this.props.history.push(`/users/${AuthenticationService.getLoggedInUserName()}/mijnCart/${mijnArray}`)
          }
       
          handleButtonDisable = (id) => {

            if((this.state.cartProductId).includes(id)){
              return true;
              
            } else{
               return false;

              }
          }
    render() {
      let role = AutheticationService.isUserAdmin();
        return (
        <div className="Products">
        <h1> Manage Products </h1>
        {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>image</th>
                <th>inCart</th>
                <th>Update</th>
                <th>Delete</th>
                <th>Add to cart</th>
                <th>Checkout</th>
              </tr>
            </thead>
            <tbody>
            { 
            this.state.lijstProducts.map ( cat =>
              <tr key={cat.id}>
                <td>{cat.title}</td>
                <td><img src={cat.img} alt="product" /></td>
                <td>{cat.inCart.toString()}</td>
             {(AutheticationService.isUserAdmin()==="admin")? <><td><button className="btn btn-success" onClick={() => this.updateProductClicked(cat.id)}>Update</button></td> 
            <td><button className="btn btn-warning" onClick={() => this.deleteProductClicked(cat.id)}>Delete</button></td></> 
            : ''}   
                <td><button disabled={this.handleButtonDisable(cat.id)} className="btn btn-success" onClick={() => {
                  this.testAddToCart(cat.id)
                 } }>
                Add to cart</button></td>
                <td>
                <button className="btn btn-success"  onClick={this.testChekoutClicked}>Checkout</button>
                    </td>
              </tr>
              )
            }
            </tbody>
          </table> 
          <div className="row">
          <button className="btn btn-success" onClick={this.addNewProductClicked}>Add new Product</button>
          </div>
        </div>
      </div>
        );
    }
}

export default Products3;