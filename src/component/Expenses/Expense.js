import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";
const Expense = (props) => {
  const [filteredDate, setFilteredDate] = useState("2019");
  const [specYearExpense, setSpecYearExpense] = useState([
    ...props.item.filter((ele) => {
        console.log(Number(ele.date.getFullYear()), "in date init")
        console.log(filteredDate, "in date init     f")
      return ele.date.getFullYear() == filteredDate;
    }),
  ]);

  const yearChangeHandler = (newYear) => {
    setFilteredDate(newYear);
    setSpecYearExpense([
      ...props.item.filter((ele) => {
        console.log(ele.date.getFullYear(), "in2 date")
        console.log(filteredDate, "in2 date f...")
        return ele.date.getFullYear() == filteredDate;
      }),
    ]);
  };

  console.log(specYearExpense, "spec");
  console.log(props.item, "props");
  console.log(filteredDate, "date-log");

  return (
    <>
      <div className="filterContainer">
        <ExpenseFilter
          selected={filteredDate}
          onYearChange={yearChangeHandler}
        />
      </div>
      {props.item.map((ele, ind) => (
        <ExpenseItem key={ind} expense={ele} />
      ))}
    </>
  );
};

export default Expense;
