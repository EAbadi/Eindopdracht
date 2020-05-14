import React, { Component } from 'react'
import Product from './Product'


export default class ProductList extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="py-5">
              <div className="container">
                
                <div className="row">
                    
                        {
                          value => {
                            return value.products.map (
                              product => {
                                return <Product key={product.id} product={product}/>
                              }
                            )
                          }
                        }
                    
                </div>
              </div>
            </div>
        </React.Fragment>
    )
  }
}