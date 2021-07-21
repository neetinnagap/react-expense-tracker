import Card from "../UI/Card";

const ExpenseFilter = (props) => {
  const yearChangeHandler = (e) => {
    props.onYearChange({ year: e.target.value });
  };

  return (
    <Card className="px-3 py-2 mb-2 flex justify-between w-full">
      <label className="text-md font-medium">Filter by year</label>
      <select value={props.selected} onChange={yearChangeHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </Card>
  );
};

export default ExpenseFilter;
