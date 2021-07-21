function ExpenseDate({ date }) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="border-2 border-gray-700 w-20 h-20 flex flex-col rounded-md items-center p-1 bg-white">
      <p className="font-bold text-gray-900 text-sm">{month}</p>
      <p className="text-gray-900">{year}</p>
      <p className="font-bold text-gray-900 text-xl">{day}</p>
    </div>
  );
}

export default ExpenseDate;
