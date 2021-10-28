import Expenses from "./components/Expenses/Expenses";

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

  return (
    <div>
      <h2>Let's get started</h2>
    <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
