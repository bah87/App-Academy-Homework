import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = { result: 0, num1: "", num2: "" };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.clear = this.clear.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
  }

  setNum1(event) {
    const num1 = event.target.value ? parseInt(event.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(event) {
    const num2 = event.target.value ? parseInt(event.target.value) : "";
    this.setState({ num2 });
  }

  clear(event) {
    event.preventDefault();
    this.setState({ result: 0, num1: "", num2: "" });
  }

  add(event) {
    event.preventDefault();
    this.setState({ result: (this.state.num1 + this.state.num2) });
  }

  subtract(event) {
    event.preventDefault();
    this.setState({ result: (this.state.num1 - this.state.num2) });
  }

  multiply(event) {
    event.preventDefault();
    this.setState({ result: (this.state.num1 * this.state.num2) });
  }

  divide(event) {
    event.preventDefault();
    this.setState({ result: (this.state.num1 / this.state.num2) });
  }

  render(){
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{this.state.result}</h1>
        <br />
        <input value={num1} onChange={this.setNum1} />
        <input value={num2} onChange={this.setNum2} />
        <button onClick={this.clear}>Clear</button>
        <br />
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Calculator;
