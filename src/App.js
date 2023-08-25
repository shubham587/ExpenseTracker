import React, { useState } from "react";
import "./App.css";
import NewExpense from "./component/NewExpense/NewExpense";
import Expense from "./component/Expenses/Expense"

function App() {

  const [expenseData, setExpenseData] = useState([])


  const saveExpenseData = (expense) => {
    setExpenseData([...expenseData, expense])
    console.log(expenseData);
  };

  return (
    <div className="App">
      <NewExpense onAddData={saveExpenseData} />
      <Expense item={expenseData}/>
    </div>
  );
}

export default App;
