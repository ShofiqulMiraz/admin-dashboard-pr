import styles from "./LatestTransactions.module.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const LastTransactions = [
  {
    customer: "Shofiqul",
    date: "20.06.2021",
    amount: "700",
    status: "Pending",
  },
  {
    customer: "Shagor",
    date: "20.06.2021",
    amount: "300",
    status: "Approved",
  },
  {
    customer: "Sharif",
    date: "19.06.2021",
    amount: "200",
    status: "Declined",
  },
  {
    customer: "Riaz",
    date: "19.06.2021",
    amount: "100",
    status: "Pending",
  },
  {
    customer: "Nayeem",
    date: "19.06.2021",
    amount: "400",
    status: "Pending",
  },
  {
    customer: "Niloy",
    date: "18.06.2021",
    amount: "900",
    status: "Approved",
  },
];

export default function LatestTransactions() {
  return (
    <div className={styles.latest_transactions}>
      <h4 className={styles.title}>Latest Transactions</h4>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {LastTransactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {transaction.customer}
                </TableCell>
                <TableCell align="right">{transaction.date}</TableCell>
                <TableCell align="right">${transaction.amount}</TableCell>
                <TableCell align="right">{transaction.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
