import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

// Initial State
const initialState = {
  transactions: [
    { item: "Headphones", amount: 900, id: 1 },
    { item: "Mouse", amount: 500, id: 2 },
    { item: "Keyboard", amount: 900, id: 3 },
    { item: "HardDisk", amount: -1200, id: 4 },
  ],
};

// Create Context

export const ExpenseContext = createContext(initialState);

// Creating porvider

export const ExpenseProvider = ({ children }) => {
  const [state, dipatch] = useReducer(ExpenseReducer, initialState);

  const deleteTransaction = (id) => {
    dipatch({
      type: "Delete_transaction",
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dipatch({
      type: "Add_transaction",
      payload: transaction,
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
