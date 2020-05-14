import React, {Component} from 'react';
import data from './data.js'
import './App.css'
import Comp1 from'./Comp1.js'
import Comp2 from './Comp2.js'

export default class App extends Component {
constructor() {
  super()

  this.state = {
  users: data

  }
  
}

render() {
  

  return  (  
  
    <div>
    <Comp2/>
    <Comp1/>    
    </div>
  
  )
}

}
