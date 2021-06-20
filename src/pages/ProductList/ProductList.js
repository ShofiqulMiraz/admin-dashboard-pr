import styles from "./ProductList.module.css";
import { DataGrid } from "@material-ui/data-grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { productRows } from "../../data/productRows";

const productColumns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: ({ row }) => (
      <>
        <Avatar alt="Remy Sharp" src={row.image} style={{ marginRight: 10 }} />
        {row.name}
      </>
    ),
  },
  { field: "stock", headerName: "In Stock", width: 150 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "price", headerName: "Price", width: 170 },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: ({ row }) => (
      <>
        <Link to={`/product/update/${row.id}`}>
          <Button size="small" variant="contained" color="primary">
            update
          </Button>
        </Link>

        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
];

export default function ProductList() {
  return (
    <div className={styles.product_list_page}>
      <DataGrid
        rows={productRows}
        columns={productColumns}
        pageSize={8}
        disableSelectionOnClick
      />
    </div>
  );
}
