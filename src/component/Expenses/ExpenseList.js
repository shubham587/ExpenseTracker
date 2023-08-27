import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = ({ filteredData }) => {
  console.log(filteredData, "list");
  if (filteredData.length === 0) {
    return <div className="noData" >No Expense Found!!!</div>;
  }

  return (
    <>
      {filteredData.map((ele, ind) => (
        <ExpenseItem key={ind} expense={ele} />
      ))}
    </>
  );
};

export default ExpenseList;
