import styles from "./UsersPage.module.css";
import { DataGrid } from "@material-ui/data-grid";
// import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const columns = [
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

const rows = [
  {
    id: 1,
    userName: "john_snow",
    email: "johnsnow@gmail.com",
    avatar:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?cs=srgb&dl=pexels-spencer-selover-428364.jpg&fm=jpg",
    status: "active",
    transaction: "200",
  },
  {
    id: 2,
    userName: "john_snow",
    email: "johnsnow@gmail.com",
    avatar:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?cs=srgb&dl=pexels-spencer-selover-428364.jpg&fm=jpg",
    status: "active",
    transaction: "100",
  },
  {
    id: 3,
    userName: "john_snow",
    email: "johnsnow@gmail.com",
    avatar:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?cs=srgb&dl=pexels-spencer-selover-428364.jpg&fm=jpg",
    status: "active",
    transaction: "400",
  },
  {
    id: "ashahcjbchbydcvHaJASHD",
    userName: "john_snow",
    email: "johnsnow@gmail.com",
    avatar:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?cs=srgb&dl=pexels-spencer-selover-428364.jpg&fm=jpg",
    status: "active",
    transaction: "300",
  },
];

export default function UsersPage() {
  return (
    <div className={styles.users_page}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
      />
    </div>
  );
}
