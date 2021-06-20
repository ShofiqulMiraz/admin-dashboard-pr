import styles from "./UpdateProductPage.module.css";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LineCharts from "../../components/LineChart/LineChart";
import { salesDataPerMonth } from "../../data/salesData";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";

export default function UpdateProductPage() {
  let { id } = useParams();

  const [inStock, setInStock] = useState("yes");
  const [active, setActive] = useState("yes");

  function handleStock(event) {
    setInStock(event.target.value);
  }
  function handleActive(event) {
    setActive(event.target.value);
  }

  return (
    <div className={styles.update_product_page}>
      <div className={styles.title_container}>
        <h4 className={styles.title}> Update Product {id} </h4>
        <Link to="/product/addnewproduct">
          <Button
            variant="contained"
            color="primary"
            startIcon={<PersonAddIcon />}
            size="medium"
          >
            Add New Product
          </Button>
        </Link>
      </div>
      <div className={styles.product_container_top}>
        <div className={styles.product_chart}>
          <LineCharts
            title="sales performance"
            data={salesDataPerMonth}
            XAxisKey="month"
            lineKey="sale"
            grid
          />
        </div>
        <div className={styles.product_details_info_container}>
          <div className={styles.info_title}> Product Details {id} </div>
          <div className={styles.product_pic_container}>
            <Avatar
              alt={id}
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              style={{ marginRight: 10 }}
            />
            <span>Apple Airpods Pro</span>
          </div>
          <div className={styles.product_details_info}>
            <p>Sales: 3000 </p>
            <p>In Stock: No </p>
          </div>
        </div>
      </div>
      <div className={styles.product_container_bottom}>
        <div className={styles.product_update_form}>
          <div className={styles.update_details_container}>
            <div className={styles.update_details_left}>
              <TextField
                id="productname"
                label="Product Name"
                variant="filled"
                size="small"
                defaultValue="Apple Airpods Pro"
                fullWidth
                style={{ marginBottom: 8 }}
              />
              <TextField
                id="price"
                label="Product Price"
                variant="filled"
                size="small"
                defaultValue="100"
                fullWidth
                style={{ marginBottom: 8 }}
              />
              <TextField
                id="instock"
                select
                label="In Stock"
                value={inStock}
                onChange={handleStock}
                variant="filled"
                fullWidth
                style={{ marginBottom: 8 }}
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>
              <TextField
                id="active"
                select
                label="Active"
                value={active}
                onChange={handleActive}
                variant="filled"
                fullWidth
                style={{ marginBottom: 8 }}
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>

              <Button variant="contained" color="primary">
                Update
              </Button>
            </div>
            <div className={styles.update_details_right}>
              <div className={styles.product_pic_container}>
                <img
                  src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt="productpic"
                  className={styles.product_pic}
                />
              </div>
              <div className={styles.update_pic_btn}>
                <input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  style={{ display: "none" }}
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload
                  </Button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
