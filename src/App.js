import React, { Component } from 'react';
import Counter1 from './components/Counter1' 

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      count : 0
    }
  }

  componentDidMount(){
    console.log('componentDidMoun : When componentrender first time')
  }
   increment(){
    this.setState({count: this.state.count + 1})
  }

  componentWillUnmount(){
    console.log("componentWillunmount: component Removed");
   }


  render() {
    return (
      <div>
        <Counter1 number ={this.state.count} />
        <button onClick={()=>{ this.increment() }}>Click me</button>
      </div>
    )
  }
}

