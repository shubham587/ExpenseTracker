import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const formSaveHandler = (expense) => {
    props.onAddData(expense)
    console.log(Number([{...expense}][0].date.getFullYear()), "asdf");
  };

  return (
    <div className="new-expense">
      <ExpenseForm onFormSave={formSaveHandler} />
    </div>
  );
};

export default NewExpense;
