import React from "react";
import "./App.css";
import { Header } from "./component/Header";
import { Balance } from "./component/Balance";
import { IncomeExpense } from "./component/IncomeExpense";
import { TransactionList } from "./component/TransactionList";
import { AddTransaction } from "./component/AddTransaction";
import { ExpenseProvider } from "./Context/ExpenseState";

function App() {
  return (
    <ExpenseProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </ExpenseProvider>
  );
}

export default App;
