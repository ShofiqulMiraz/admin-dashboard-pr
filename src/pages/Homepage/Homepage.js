import styles from "./Homepage.module.css";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import LineCharts from "../../components/LineChart/LineChart";
import { salesData } from "../../data/salesData";
import NewUsers from "../../components/NewUsers/NewUsers";
import LatestTransactions from "../../components/LatestTransactions/LatestTransactions";

export default function HomePage() {
  return (
    <>
      <FeaturedInfo />
      <div className={styles.line_chart_container}>
        <LineCharts
          title="Sales Analytics"
          grid
          lineKey="sale"
          XAxisKey="name"
          data={salesData}
        />
      </div>

      <div className={styles.widgets}>
        <div className={styles.left}>
          <NewUsers />
        </div>
        <div className={styles.right}>
          <LatestTransactions />
        </div>
      </div>
    </>
  );
}
