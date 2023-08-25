import ExpenseItem from "./ExpenseItem"
const Expense = (props) => {
    return(
        props.item.map((ele, ind) => (
            <ExpenseItem key={ind} expense={ele} />
        ))
    )
}

export default Expense