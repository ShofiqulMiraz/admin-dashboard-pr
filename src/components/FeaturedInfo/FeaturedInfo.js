import styles from "./FeaturedInfo.module.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export default function FeaturedInfo() {
  return (
    <div className={styles.featured_info}>
      <FeatureCard
        title="Revenue"
        amount="700"
        profit={true}
        percantage="11.5"
      />
      <FeatureCard title="Sales" amount="1000" profit={true} percantage="8.5" />
      <FeatureCard title="Cost" amount="352" profit={false} percantage="7.5" />
    </div>
  );
}

function FeatureCard({ title, amount, profit, percantage }) {
  return (
    <div className={styles.feature_card}>
      <span className={styles.card_title}> {title} </span>
      <div className={styles.money_container}>
        <span className={styles.money}> ${amount} </span>
        {profit ? (
          <span className={`${styles.rate} ${styles.profit}`}>
            +{percantage}% <ArrowUpwardIcon />
          </span>
        ) : (
          <span className={`${styles.rate} ${styles.loss}`}>
            -{percantage}% <ArrowDownwardIcon />
          </span>
        )}
      </div>
      <span className={styles.sub}> Compared To Last Month </span>
    </div>
  );
}
