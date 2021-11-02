import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const { data } = props;
  const dataPointValues = data.map(dataPoint => dataPoint.value)
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {data.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={maxValue}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
