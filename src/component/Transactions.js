import React, { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseState";

export const Transactions = ({ transaction }) => {
  const plusMinus = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(ExpenseContext);

  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.item}
        <span>
          {plusMinus}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};
