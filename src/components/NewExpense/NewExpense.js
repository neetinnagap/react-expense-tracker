import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const dataChangeHandler = (data) => {
    const modified = {
      ...data,
      id: Math.random().toString(),
    };

    props.onDataChange(modified);
  };

  return (
    <div>
      <ExpenseForm onDataChange={dataChangeHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
