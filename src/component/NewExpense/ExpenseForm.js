import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  // The below is a way to declare a useState when dealing with the multiState and a good approach
  const [userInput, setUserInput] = useState({
    setEnteredAmount: "",
    setEnteredTitle: "",
    setEnteredDate: "",
  });

  // ******* The below handlers are commented bcoz we have used all these handlers are handled by single handler i.e dataChangeHandler()
  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value);

  // setUserInput({  // This is one of the way to update a state not depend upon prevState
  //   ...userInput,
  //   setEnteredTitle: event.target.value
  // });

  // ********The below state approach is used when and mostly used in general and when it depend upon the prevState
  // setUserInput((prevState) => {
  //   return {
  //     ...prevState,
  //     setEnteredTitle : event.target.value
  //   }
  // })
  // };

  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  // };

  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // };

  const dataChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      // setEnteredTitle(value);
      // userInput.setEnteredTitle = value
      setUserInput((prevState) => {
        return {
          ...prevState,
          setEnteredTitle : value
        }
      })
    } else if (identifier === "amount") {
      // setEnteredAmount(value);
      // userInput.setEnteredAmount = value
      setUserInput((prevState) => {
        return {
          ...prevState,
          setEnteredAmount : value
        }
      })
    } else {
      // setEnteredDate(value);
      // userInput.setEnteredDate = value
      setUserInput((prevState) => {
        return {
          ...prevState,
          setEnteredDate : value
        }
      })
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let submitData = {
      "title" : userInput.setEnteredTitle,
      "amount" : userInput.setEnteredAmount,
      "date" : new Date(userInput.setEnteredDate)
    }
    setUserInput((prevState) => {
      return {
        setEnteredAmount : "",
        setEnteredDate : "",
        setEnteredTitle : ""
      }
    })
    props.onFormSave(submitData)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={userInput.setEnteredTitle}
            onChange={(event) => {
              dataChangeHandler("title", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={userInput.setEnteredAmount}
            min="0.01"
            step="0.01"
            onChange={(event) => {
              dataChangeHandler("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.setEnteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={(event) => {
              dataChangeHandler("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
