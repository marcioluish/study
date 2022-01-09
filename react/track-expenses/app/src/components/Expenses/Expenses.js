import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const filterByYear = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.items.filter((e) => {
    return e.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={year} onYearSelected={filterByYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
