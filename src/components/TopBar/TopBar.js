import styles from "./TopBar.module.css";
import { IconButton, Badge, Avatar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";
import { useHistory } from "react-router-dom";

export default function TopBar() {
  let history = useHistory();
  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.logo} onClick={() => history.push("/")}>
            SHOFIQUL
          </span>
        </div>
        <div className={styles.right}>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="language" color="inherit">
            <LanguageIcon />
          </IconButton>
          <IconButton aria-label="settings" color="inherit">
            <SettingsIcon />
          </IconButton>
          <Avatar
            alt="avatar"
            src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?cs=srgb&dl=pexels-spencer-selover-428364.jpg&fm=jpg"
          />
        </div>
      </div>
    </div>
  );
}
