import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const { expenses } = props;
  const [yearSelected, setFilterYear] = useState('2020');

  const filterExpensesHandler = year => {
    setFilterYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter filterExpenses={filterExpensesHandler} yearSelected={yearSelected}/>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
