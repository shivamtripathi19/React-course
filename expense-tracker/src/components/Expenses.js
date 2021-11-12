import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from './Card'
function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((ele) => {
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
