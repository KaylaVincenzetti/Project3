import React, { Component } from 'react';




import Form from '../components/Form/Form';
import Flexbox from 'flexbox-react';


class depression extends Component {
  state = {
    value: ''
  };
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
      <Flexbox flexDirection="column" minHeight="100vh">
      
       
       
       <Form 
       handleChange = {this.handleChange}
       handleSubmit = {this.handleSubmit}
       value = {this.state.value}
       />
        
        </Flexbox>
        
      </div>
    );
  }
}

export default depression;
