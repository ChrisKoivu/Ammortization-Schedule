/* 
		    calculates the regular P&I payment
		*/

function CalcPmt(pb, rate, term) {
  return pb / ((1 - 1 / Math.pow(1 + rate / 12, term)) / (rate / 12));
}

/*
  calculates monthly interest payment
*/
function CalcIntPmt(pb, rate) {
  return (pb * rate) / 12;
}

/* 
this function adds a number of months to current month,
setting the day of the month to the first of the month
*/
function AddMonth(months) {
  /* get the current date */
  var CurrentDate = new Date();
  /*  add the number of months to current date */
  CurrentDate.setMonth(CurrentDate.getMonth() + months);
  /* 
    since jan is zero, add 1 to each month, set day to first of 
    month, and format the date to convention
  */
  return CurrentDate.getMonth() + 1 + "/1/" + CurrentDate.getFullYear();
}

export { CalcPmt, CalcIntPmt, AddMonth };
