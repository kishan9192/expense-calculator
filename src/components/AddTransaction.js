import { isEmpty } from "lodash";
import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseInt(amount),
    };
    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  const isSubmitDisabled = isEmpty(text) && isEmpty(amount);

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Enter expense details</label>
          <input
            type="text"
            autoFocus
            autoComplete="off"
            id="text"
            placeholder="Enter description"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button disabled={isSubmitDisabled} className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
}

export default AddTransaction;
