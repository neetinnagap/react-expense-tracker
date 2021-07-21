import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const dataChangeHandler = (data) => {
    const modified = {
      ...data,
      id: Math.random().toString(),
    };

    props.onDataChange(modified);
  };

  const [formShown, setFormShown] = useState(false);

  if (!formShown) {
    return (
      <button
        className="text-lg font-bold uppercase tracking-wide  bg-gray-700 text-gray-100 px-3 py-2 rounded-sm hover:bg-gray-600"
        onClick={() => setFormShown(true)}
      >
        Add New Expense
      </button>
    );
  }

  return (
    <ExpenseForm
      onDataChange={dataChangeHandler}
      onCancelClick={() => setFormShown(false)}
    ></ExpenseForm>
  );
};

export default NewExpense;
