import React, {Component} from 'react';

import Sum from './components/Sum/Sum';
import Form from './components/Form/Form';

import './App.css';

class App extends Component {
  state = {
    billAmount: ''
  }

  setBillAmount = (billAmount) => {
    this.setState({
      billAmount
    });
  }

  render() {
    return (
      <div className="form-container">
        <h3>Formularz klasowy</h3>
        {this.state.billAmount ? <Sum sum={this.state.billAmount} setBillAmount={this.setBillAmount} /> : <Form setBillAmount={this.setBillAmount} />}
      </div>
    );
  }
}

export default App;
