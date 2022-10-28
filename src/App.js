import React, {Component} from 'react';
import './App.css';
import BMICalculator from './components/bmicalculator';

export default class App extends Component {
  constructor() {
    super()
  
    this.state = {
      title : "BMI Calculator"
    }
  }

  
  render(){
    return (
      <div className='App'> 
        <BMICalculator title={this.state.title}/>
      </div>
    )
  }
}



