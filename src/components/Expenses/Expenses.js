import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterYearChangeHandler = (data) => {
    setSelectedYear(data.year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className="px-3 py-2 flex flex-col items-center">
      <ExpenseFilter
        selected={selectedYear}
        onYearChange={filterYearChangeHandler}
      ></ExpenseFilter>
      <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
      <ExpenseList items={filteredExpenses}></ExpenseList>
    </div>
  );
}

export default Expenses;
