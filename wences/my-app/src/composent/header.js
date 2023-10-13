import { render } from '@testing-library/react';
import react, { Component } from 'react';

class header extends 
react.Component {
    constructor (){
        super();
    this.state={nom:"wences"};    }
}
    render() {<div><h1>le site de: {this.state.nom} </h1></div>}


export default Header