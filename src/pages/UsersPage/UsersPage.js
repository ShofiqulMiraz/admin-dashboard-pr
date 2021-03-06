import styles from "./UsersPage.module.css";
import { DataGrid } from "@material-ui/data-grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { userRows } from "../../data/userRows";

const userColumns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: ({ row }) => (
      <>
        <Avatar alt="Remy Sharp" src={row.avatar} style={{ marginRight: 10 }} />
        {row.userName}
      </>
    ),
  },
  { field: "email", headerName: "Email", width: 200 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "transaction", headerName: "Transaction", width: 170 },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: ({ row }) => (
      <>
        <Link to={`/user/update/${row.id}`}>
          <Button size="small" variant="contained" color="primary">
            Edit
          </Button>
        </Link>

        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
];

export default function UsersPage() {
  return (
    <div className={styles.users_page}>
      <DataGrid
        rows={userRows}
        columns={userColumns}
        pageSize={8}
        disableSelectionOnClick
      />
    </div>
  );
}
