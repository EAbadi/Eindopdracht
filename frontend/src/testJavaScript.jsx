import React, { Component } from 'react';
import { test } from 'ramda';

class testJavaScript extends Component {
    constructor(props){
        super(props)
        this.state = {
            mijnArray: [{id: 3 , title: 'hoi' , img: 'foto.jpg'},
            {id: 5 , title: 'Hoe gaat het' , img: 'hoehetgaat.jpg'},
            {id: 6 , title: 'Tot ziens' , img: 'doeg.jpg'}
        ]
        }
    }

    testFunctie = () => {
        this.setState({
         
        })
    }
    render() {
        return (
            <div>
                <h2>Hallo from testJavaScript</h2>
              
                {this.state.mijnArray.map((user)=> console.log(user.title) )}
                {console.log(this.state.mijnArray)}
            </div>
        );
    }
}

export default testJavaScript;