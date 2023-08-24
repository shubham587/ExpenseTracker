import React, { useState } from "react";
import "./App.css";
import ExpenseItem from "./component/UI/ExpenseItem";
import NewExpense from "./component/NewExpense/NewExpense";

function App() {
  const expenseData = [
    { date: new Date(2020, 7, 14), title: "home loan", price: "25.4" },
    { date: new Date(2020, 7, 14), title: "bike loan", price: "25.4" },
    { date: new Date(2020, 7, 14), title: "own loan", price: "25.4" },
    { date: new Date(2020, 7, 14), title: "cycle loan", price: "25.4" },
  ];

  const saveExpenseData = (expense) => {
    expenseData.push(expense);
    console.log(expenseData);
  };

  return (
    <div className="App">
      <NewExpense onAddData={saveExpenseData} />
      {expenseData.map((ele, index) => (
        <ExpenseItem key={index} expense={ele} />
      ))}
    </div>
  );
}

export default App;
