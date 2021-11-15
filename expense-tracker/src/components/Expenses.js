import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = React.useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {filteredExpenses.length == 0 && (
        <p style={{ color: "white" }}>No data found.</p>
      )}

      {filteredExpenses.map((ele) => {
        return (
          <ExpenseItem
            key={ele.title}
            title={ele.title}
            amount={ele.amount}
            date={ele.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
