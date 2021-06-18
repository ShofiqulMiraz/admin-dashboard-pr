import styles from "./NewUsers.module.css";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Avatar from "@material-ui/core/Avatar";
import { NewUsersList } from "../../data/newUserList";

export default function NewUsers() {
  return (
    <div className={styles.new_users}>
      <h4 className={styles.title}> New Joined Members </h4>
      <ul className={styles.user_list}>
        {NewUsersList.map((user, index) => (
          <li key={index} className={styles.user_list_items}>
            <Avatar alt={user.name} src={user.img} />
            <div className={styles.name_designation}>
              <span className={styles.name}> {user.name} </span>
              <span className={styles.designation}> {user.designation} </span>
            </div>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<VisibilityIcon />}
            >
              Details
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
