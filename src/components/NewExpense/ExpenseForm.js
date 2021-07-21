import { useState } from "react";

const ExpenseForm = (props) => {
  const [enterredTitle, setEnterredTitle] = useState("");
  const [enterredAmount, setEnterredAmount] = useState("");
  const [enterredDate, setEnterredDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enterredTitle,
      amount: enterredAmount,
      date: new Date(enterredDate),
    };

    props.onDataChange(expenseData);
    setEnterredTitle("");
    setEnterredAmount("");
    setEnterredDate("");
  };

  return (
    <form className="flex flex-col" onSubmit={submitHandler}>
      <label className="text-sm font-bold text-gray-800">Title</label>
      <input
        className="mb-2 w-72 rounded-sm text-lg px-2 py-1"
        type="text"
        value={enterredTitle}
        onChange={(e) => setEnterredTitle(e.target.value)}
      />
      <label className="text-sm font-bold text-gray-800">Amount</label>
      <input
        className="mb-2 w-72 rounded-sm text-lg px-2 py-1"
        type="number"
        min="0.01"
        step="0.01"
        value={enterredAmount}
        onChange={(e) => setEnterredAmount(e.target.value)}
      />
      <label className="text-sm font-bold text-gray-800">Date</label>
      <input
        className="mb-2 w-72 rounded-sm text-lg px-2 py-1"
        type="date"
        min="2019-01-01"
        max="2021-12-31"
        value={enterredDate}
        onChange={(e) => setEnterredDate(e.target.value)}
      />
      <div className="flex">
        <button
          className="mb-4 mr-2 w-48 text-lg font-bold uppercase tracking-wide  bg-gray-700 text-gray-100 px-3 py-2 rounded-sm hover:bg-gray-600"
          type="submit"
        >
          Add Expense
        </button>
        <button
          className="mb-4 w-48 text-lg font-bold uppercase tracking-wide  bg-gray-700 text-gray-100 px-3 py-2 rounded-sm hover:bg-gray-600"
          onClick={props.onCancelClick}
        >
          CANCEL
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
