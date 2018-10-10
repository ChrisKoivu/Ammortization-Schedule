import React from "react";
import ReactDOM from "react-dom";
import { CalcPmt, CalcIntPmt, AddMonth } from "../components/Payment.js";

function CreateTable(props) {
  let table = [];

  table.push(
    <tr>
      <th>Due Date</th>
      <th>Payment</th>
      <th>Principal</th>
      <th>Interest</th>
      <th>Principal Balance</th>
    </tr>
  );

  let pb = props.amount;
  let rate = props.rate / 100;
  let term = props.term;
  let rembal = pb;
  let regPmt = CalcPmt(pb, rate, term);
  // Outer loop to create rows
  for (let i = 0; i < term; i++) {
    // for month count value, add 1 to counter
    let month = i + 1;
    // add month count value to first due date
    let pmtDate = AddMonth(month);
    let intPmt = CalcIntPmt(rembal, rate);
    let prinpmt = regPmt - intPmt;
    rembal = Math.abs(rembal - prinpmt);

    // set html class for table row
    let odd = isOdd(month);

    table.push(
      <tr key={month.toString()} class={odd}>
        <td>{pmtDate}</td>
        <td>{regPmt.toFixed(2)}</td>
        <td>{prinpmt.toFixed(2)}</td>
        <td>{intPmt.toFixed(2)}</td>
        <td>{rembal.toFixed(2)}</td>
      </tr>
    );
  }

  return <table className="AmmSched">{table}</table>;
}

function isOdd(number) {
  return number % 2 ? "odd" : "even";
}

export { CreateTable };
