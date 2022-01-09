import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((e) => e.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((e) => (
        <ChartBar
          key={e.label}
          value={e.value}
          maxValue={totalMaximum}
          label={e.label}
        />
      ))}
    </div>
  );
};

export default Chart;
