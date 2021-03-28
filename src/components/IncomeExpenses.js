import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((transaction) => transaction > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
    
  const expense = amounts
    .filter((transaction) => transaction< 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    // This way it'll make an array of object where transaction amount is < 0. Use console.log to check
    // const expense = transactions
    // .filter((transaction) => transaction.amount < 0)
    // .reduce((acc, item) => (acc += item), 0)
    // .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expense}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
