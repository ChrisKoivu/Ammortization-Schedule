import React from "react";
import ReactDOM from "react-dom";

export default class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleRateChange(event) {
    this.props.onRateChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleTermChange(event) {
    this.props.onTermChange(event.target.value);
  }

  handleAmountChange(event) {
    this.props.onAmountChange(event.target.value);
  }

  render() {
    let rate = this.props.rate;
    let term = this.props.term;
    let amount = this.props.amount;

    return (
      <form>
        <table className="ammform">
          <tr>
            <td>
              <label>Rate:</label>
            </td>
            <td>
              <input
                type="text"
                name="rate"
                value={rate}
                onChange={this.handleRateChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Term:</label>
            </td>
            <td>
              <input
                type="text"
                name="term"
                value={term}
                onChange={this.handleTermChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Amount:</label>
            </td>
            <td>
              <input
                type="text"
                name="amount"
                value={amount}
                onChange={this.handleAmountChange}
              />
            </td>
          </tr>
        </table>
      </form>
    );
  }
}
