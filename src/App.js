import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Coca-Cola",
      amount: 28,
      date: new Date(2021, 10, 28),
    },
    {
      id: 2,
      title: "Leche",
      amount: 27.7,
      date: new Date(2021, 10, 28),
    },
    {
      id: 3,
      title: "Puré de papa",
      amount: 20,
      date: new Date(2021, 10, 28),
    },
  ];

  const addExpenseHandler = expense => {
    console.log("Agregado")
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
