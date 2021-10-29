import { useState } from 'react'

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const { title, amount, date } = props
  const [currTitle, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle('a')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{currTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Cambiar elemento</button>
    </Card>
  );
}

export default ExpenseItem;
