import ChartBar from "./ChartBar";

const Chart = (props) => {
  const values = props.dataPoints.map((point) => point.value);
  const max = Math.max(...values);

  return (
    <div className="flex justify-between px-4 py-3 h-28 w-full">
      {props.dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          max={max}
          label={point.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
