import styles from "./UpdateUserPage.module.css";
import { Link, useParams } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

export default function UpdateUserPage() {
  let { id } = useParams();
  return (
    <div className={styles.update_user_page}>
      <div className={styles.title_container}>
        <h4 className={styles.title}> Update User {id} </h4>
        <Link to="/user/addnewuser">
          <Button
            variant="contained"
            color="primary"
            startIcon={<PersonAddIcon />}
            size="medium"
          >
            Add New User
          </Button>
        </Link>
      </div>
      <div className={styles.user_details_container}>
        <div className={styles.show_user_details}>
          <div className={styles.top}>
            <Avatar
              alt={id}
              className={styles.avatar}
              src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?cs=srgb&dl=pexels-spencer-selover-428364.jpg&fm=jpg"
            />
            <div className={styles.top_details}>
              <span className={styles.name}> John Snow </span>
              <span className={styles.designation}> Architect </span>
            </div>
          </div>
          <div className={styles.bottom}>
            <h5 className={styles.info_title}> Account Details </h5>
            <div className={styles.info}>
              <PermIdentityIcon />
              <span className={styles.info_details}> John Snow </span>
            </div>
            <div className={styles.info}>
              <CalendarTodayIcon />
              <span className={styles.info_details}> 10.10.2020 </span>
            </div>
            <h5 className={styles.info_title}> Contact Details </h5>
            <div className={styles.info}>
              <PhoneAndroidIcon />
              <span className={styles.info_details}> +8801795834054 </span>
            </div>
            <div className={styles.info}>
              <MailOutlineIcon />
              <span className={styles.info_details}> simiraz90@gmail.com </span>
            </div>
            <div className={styles.info}>
              <LocationSearchingIcon />
              <span className={styles.info_details}> NY, USA </span>
            </div>
          </div>
        </div>
        <div className={styles.update_user_details}>
          <div className={styles.update_details_container}>
            <div className={styles.update_details_left}>
              <TextField
                id="username"
                label="User Name"
                variant="filled"
                size="small"
                defaultValue="jon_snow"
                fullWidth
                style={{ marginBottom: 8 }}
              />
              <TextField
                id="fullname"
                label="Full Name"
                variant="filled"
                size="small"
                defaultValue="Jon Snow"
                fullWidth
                style={{ marginBottom: 8 }}
              />
              <TextField
                id="email"
                label="Email"
                variant="filled"
                size="small"
                defaultValue="simiraz90@gmail.com"
                fullWidth
                style={{ marginBottom: 8 }}
              />
              <TextField
                id="phone"
                label="Phone"
                variant="filled"
                size="small"
                defaultValue="+8801795834054"
                fullWidth
                style={{ marginBottom: 8 }}
              />
              <TextField
                id="address"
                label="Address"
                variant="filled"
                size="small"
                defaultValue="NY,USA"
                fullWidth
                style={{ marginBottom: 8 }}
              />
              <Button variant="contained" color="primary">
                Update
              </Button>
            </div>
            <div className={styles.update_details_right}>
              <div className={styles.profile_pic_container}>
                <img
                  src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?cs=srgb&dl=pexels-spencer-selover-428364.jpg&fm=jpg"
                  alt="profilepic"
                  className={styles.profile_pic}
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
