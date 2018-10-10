import React from "react";
import ReactDOM from "react-dom";
import { CreateTable } from "./components/AmmSched.js";
import EntryForm from "./components/EntryForm.js";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: "",
      amount: "",
      term: ""
    };
    this.handleInputRateChange = this.handleInputRateChange.bind(this);
    this.handleInputTermChange = this.handleInputTermChange.bind(this);
    this.handleInputAmountChange = this.handleInputAmountChange.bind(this);
  }

  handleInputRateChange(rate) {
    this.setState({ rate: rate });
  }

  handleInputTermChange(term) {
    this.setState({ term: term });
  }

  handleInputAmountChange(amount) {
    this.setState({ amount: amount });
  }

  render() {
    return (
      <div className="App">
        <h1>Loan Ammortization Table</h1>

        <p className="info">Please enter loan terms below:</p>

        <EntryForm
          rate={this.state.rate}
          term={this.state.term}
          amount={this.state.amount}
          submitted={this.state.submitted}
          onRateChange={this.handleInputRateChange}
          onTermChange={this.handleInputTermChange}
          onAmountChange={this.handleInputAmountChange}
        />

        <CreateTable
          rate={this.state.rate}
          term={this.state.term}
          amount={this.state.amount}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
