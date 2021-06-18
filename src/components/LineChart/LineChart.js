import styles from "./LineCharts.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function LineCharts({ title, data, XAxisKey, lineKey, grid }) {
  return (
    <div className={styles.linechart}>
      <h3 className={styles.title}> {title} </h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={XAxisKey} stroke="#5550bd" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={lineKey}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
