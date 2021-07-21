const ChartBar = (props) => {
  let barHeight = "0%";
  if (props.max > 0) {
    barHeight = `${Math.round((100 * props.value) / props.max)}%`;
  }
  return (
    <div className="flex flex-col">
      <div className="h-full w-4 rounded-full bg-gray-100 overflow-hidden flex flex-col justify-end">
        <div
          className="transition-all duration-500 ease-out inset-x-0 bottom-0 w-full bg-gray-800"
          style={{ height: barHeight }}
        ></div>
      </div>
      <p>{props.label}</p>
    </div>
  );
};

export default ChartBar;
