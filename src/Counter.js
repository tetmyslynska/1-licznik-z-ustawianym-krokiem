import React, { Component } from "react";
import "./Counter.css";

import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
//import Clock from './Clock';

import Step from "./Step";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      stepValue: 1,
    };
  }

    
  updateStepValue = (value) => {
    console.log(value);
    this.setState({
       stepValue: +value
        })
    };
    


  updateCounter = (action) => {

    let currentCounterValue;

    if(action === 'add'){
      currentCounterValue = this.state.counterValue + this.state.stepValue;
    }else if(action === 'reinit'){
      currentCounterValue = this.props.initValue;
      
    }else{
      currentCounterValue = 0;
    }

    this.setState ((prevState) => ({
      counterValue: currentCounterValue
      
    }));
  };


  render() {
    return (
      <div className="counter">
        Counter:
        <Display displayValue={this.state.counterValue} />
        <ButtonsPanel buttonMethod={this.updateCounter} stepValue={this.state.stepValue}/>
       
        <Step stepMethod={this.updateStepValue} />
      </div>
    );
  }
}

// function Counter (props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);
//     return (
//     <div className="counter">
// Counter:
// <span className="value">
//     {props.initValue}
// </span>
//     </div>
//     );
// }

export default Counter;
