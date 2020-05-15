import React, { Component } from 'react';
import data from './data.js'
import './App.css'
import Comp1 from './Comp1.js'
import Comp2 from './Comp2.js'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      users: data,
      ind: 0,
      num: 1
    }
this.handle = this.handle.bind(this)
this.handle2 = this.handle2.bind(this)
  }
  handle() {
    if (this.state.ind === 24) {
      this.setState({ ind: 0})
    }
    else {
    this.setState({ ind: this.state.ind + 1 })
  }
  
}
  handle2() {
    if (this.state.ind === 0) {
      this.setState({ ind: 24})
    }
    else {
    this.setState({ ind: this.state.ind - 1 })
  }}
  render() {


    return (

      <div>
        <Comp2 />

        <Comp1 user={this.state.users} ind={this.state.ind} handle={this.handle} handle2={this.handle2}/>
      </div>

    )
  }

}
