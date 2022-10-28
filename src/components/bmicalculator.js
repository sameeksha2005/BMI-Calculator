import React, {Component} from 'react';
import Form from './form';
import Navbar from './navbar';
import bmipng from '../assests/bmi.png';



export default class bmicalculator extends Component {
  constructor(props) {
    super(props)
  }
  
    render() {
        var style={
            marginTop: '50px',
            marginBottom: '50px'
        }
    return (
      <div>
        <Navbar/>
        <div className="container" style={style}>
            <img src={bmipng} className="bmipng"/> 
            <h2>{this.props.title}</h2>
            <Form/>
        </div>
      </div>
    )
  }
}
