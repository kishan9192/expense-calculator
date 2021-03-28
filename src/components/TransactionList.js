import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState'
import Transactions from './Transactions';

// we can pull out from our globalcontext using the useContext hook


function TransactionList() {
    // const context = useContext(GlobalContext);
    // console.log(context);

    const {transactions} = useContext(GlobalContext);
    // the context.transactions or after destructuring {transactions} from context, we have the transactions array
    // which we need to loop through


  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
          {transactions.map((transaction, index) => (<Transactions key = {transaction.id} transaction = {transaction} />))}
        
      </ul>
    </div>
  );
}

export default TransactionList;
