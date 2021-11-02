import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const { expenses } = props;
  const [yearSelected, setFilterYear] = useState("2020");

  const filterExpensesHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearSelected;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterExpenses={filterExpensesHandler}
        yearSelected={yearSelected}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
