import React, { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseState";
import { Transactions } from "./Transactions";

export const TransactionList = () => {
  const { transactions } = useContext(ExpenseContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transactions transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
};
