import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

    const choiceHandler = (event) => {
        console.log(event.target.value, "cha")
        props.onYearChange(event.target.value)
    }

    return(
        <div className="exp-filter">
            <div className="exp-filter__control">
                <select value={props.selected} onChange={choiceHandler}>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter