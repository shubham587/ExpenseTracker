import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";
const Expense = (props) => {
  //   const [filteredDate, setFilteredDate] = useState("2019");
  //   const [specYearExpense, setSpecYearExpense] = useState([
  //     // ...props.item.filter((ele) => {
  //     //   return ele.date.getFullYear() === Number(filteredDate);
  //     // }),
  //   ]);

  const [expenData, setExpenData] = useState({
    filteredDate: "2019",
    specYearExpense: [
      ...props.item.filter((ele) => {
        console.log(Number(ele.date.getFullYear()), "in");
        return Number(ele.date.getFullYear()) === this.filteredDate;
      }),
    ],
  });

  const yearChangeHandler = (newYear) => {
    setExpenData((prevState) => {
      return {
        filteredDate: newYear,
        specYearExpense: [
          ...props.item.filter((ele) => {
            console.log(Number(ele.date.getFullYear()), "in");
            return Number(ele.date.getFullYear()) === this.filteredDate;
          }),
        ],
      };
    });
    // setFilteredDate(newYear);
    // setSpecYearExpense([
    //   ...props.item.filter((ele) => {
    //     console.log(Number(ele.date.getFullYear()), "in");
    //     return Number(ele.date.getFullYear()) === newYear;
    //   }),
    // ]);
  };

  console.log(expenData.filteredDate, "filter");
  console.log(expenData.specYearExpense, "data");

  return (
    <>
      <div className="filterContainer">
        <ExpenseFilter
          selected={expenData.filteredDate}
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
