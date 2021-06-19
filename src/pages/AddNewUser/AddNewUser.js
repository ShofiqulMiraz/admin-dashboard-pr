import styles from "./AddNewUser.module.css";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

export default function AddNewUser() {
  const [gender, setGender] = useState("male");
  const [active, setActive] = useState("yes");

  function handleGender(event) {
    setGender(event.target.value);
  }
  function handleActive(event) {
    setActive(event.target.value);
  }

  return (
    <div className={styles.add_new_user}>
      <h1 className={styles.title}>Add New User</h1>
      <div className={styles.user_form}>
        <div className={styles.form_left}>
          <TextField
            id="username"
            label="User Name"
            variant="filled"
            fullWidth
            style={{ marginBottom: 8 }}
          />
          <TextField
            id="email"
            label="Email"
            variant="filled"
            fullWidth
            style={{ marginBottom: 8 }}
          />
          <TextField
            id="phone"
            label="Phone"
            variant="filled"
            fullWidth
            style={{ marginBottom: 8 }}
          />
          <TextField
            id="gender"
            select
            label="Gender"
            value={gender}
            onChange={handleGender}
            variant="filled"
            fullWidth
            style={{ marginBottom: 8 }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>
          <div className={styles.submit_btn}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PersonAddIcon />}
              size="medium"
            >
              Add New User
            </Button>
          </div>
        </div>
        <div className={styles.form_right}>
          <TextField
            id="fullname"
            label="Full Name"
            variant="filled"
            fullWidth
            style={{ marginBottom: 8 }}
          />
          <TextField
            id="password"
            label="Password"
            variant="filled"
            fullWidth
            style={{ marginBottom: 8 }}
          />
          <TextField
            id="address"
            label="Address"
            variant="filled"
            fullWidth
            style={{ marginBottom: 8 }}
          />
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
        </div>
      </div>
    </div>
  );
}
