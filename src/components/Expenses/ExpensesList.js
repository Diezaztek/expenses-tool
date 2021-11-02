import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const { expenses } = props;

  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses to list</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
