import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ title, amount, date }) {
  return (
    <Card className="mb-2 flex justify-between items-center rounded-sm px-4 py-3 w-full">
      <ExpenseDate date={date}></ExpenseDate>
      <span className="font-bold text-2xl">{title}</span>
      <span className="text-red-600 font-bold text-3xl">${amount}</span>
    </Card>
  );
}

export default ExpenseItem;
