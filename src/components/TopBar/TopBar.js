import styles from "./TopBar.module.css";
import { IconButton, Badge, Avatar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.logo}> SHOFIQUL </span>
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
            src="https://shofiqul-portfolio.vercel.app/_next/image?url=%2FprofilePic.jpg&w=256&q=75"
          />
        </div>
      </div>
    </div>
  );
}
