import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";
const Expense = (props) => {
  const [filteredDate, setFilteredDate] = useState("2019");
  //   const [specYearExpense, setSpecYearExpense] = useState([
  //     // ...props.item.filter((ele) => {
  //     //   return ele.date.getFullYear() === Number(filteredDate);
  //     // }),
  //   ]);

  const filteredArr = props.item.filter((ele) => {
    return ele.date.getFullYear().toString() === filteredDate;
  });

  // const [ set = useState({
  //   filteredDate: "2019",
  //   specYearExpense: [...filteredArr],
  // });

  const yearChangeHandler = (newYear) => {
    // set(prevState) => {
    //   return {
    //     filteredDate: newYear,
    //     specYearExpense: [
    //       props.item.filter((ele) => {
    //         return ele.date.getFullYear().toString() === newYear;
    //       }),
    //     ],
    //   };
    // });
    setFilteredDate(newYear);
    // setSpecYearExpense([
    //   ...props.item.filter((ele) => {
    //     console.log(Number(ele.date.getFullYear()), "in");
    //     return Number(ele.date.getFullYear()) === newYear;
    //   }),
    // ]);
  };

  return (
    <>
      <div className="filterContainer">
        <ExpenseFilter
          selected={filteredDate}
          onYearChange={yearChangeHandler}
        />
      </div>
      {filteredArr.map((ele, ind) => (
        <ExpenseItem key={ind} expense={ele} />
      ))}
    </>
  );
};

export default Expense;
