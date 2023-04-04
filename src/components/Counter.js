import React, { Component } from 'react'

export default class Counter extends Component {

   componentDidUpdate(prevprops, prevState){
    if(prevprops.number !== this.props.number){
        //console.log(prevprops.number)
        //console.log(this.props.number)
        console.log("Component Updated")
    }
   } 

 
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
