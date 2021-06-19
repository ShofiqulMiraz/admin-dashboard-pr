import styles from "./SideBar.module.css";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import TimelineIcon from "@material-ui/icons/Timeline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import StorefrontIcon from "@material-ui/icons/Storefront";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BarChartIcon from "@material-ui/icons/BarChart";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ReportIcon from "@material-ui/icons/Report";
import WorkIcon from "@material-ui/icons/Work";
import { NavLink } from "react-router-dom";

const sidebarContent = [
  {
    title: "Dashboard",
    lists: [
      {
        title: "Home",
        path: "/",
        icon: <LineStyleIcon />,
      },
      {
        title: "Analytics",
        path: "/analytics",
        icon: <TimelineIcon />,
      },
      {
        title: "Sales",
        path: "/sales",
        icon: <TrendingUpIcon />,
      },
    ],
  },
  {
    title: "Quick Menu",
    lists: [
      {
        title: "Users",
        path: "/users",
        icon: <PermIdentityIcon />,
      },
      {
        title: "Products",
        path: "/products",
        icon: <StorefrontIcon />,
      },
      {
        title: "Transaction",
        path: "/transaction",
        icon: <AttachMoneyIcon />,
      },
      {
        title: "Reports",
        path: "/reports",
        icon: <BarChartIcon />,
      },
    ],
  },
  {
    title: "Notifications",
    lists: [
      {
        title: "Mail",
        path: "/mail",
        icon: <MailOutlineIcon />,
      },
      {
        title: "Feedbacks",
        path: "/feedbacks",
        icon: <DynamicFeedIcon />,
      },
      {
        title: "Messages",
        path: "/messages",
        icon: <ChatBubbleOutlineIcon />,
      },
    ],
  },
  {
    title: "Staff",
    lists: [
      {
        title: "Manage",
        path: "/manage",
        icon: <WorkIcon />,
      },
      {
        title: "Reports",
        path: "/reports",
        icon: <ReportIcon />,
      },
    ],
  },
];

export default function SideBar() {
  return (
    <div className={styles.container}>
      {sidebarContent.map((sidebar, index) => (
        <div className={styles.menu} key={index}>
          <h3 className={styles.title}> {sidebar.title} </h3>
          <ul className={styles.sidebar_list}>
            {sidebar.lists.map((list, index) => (
              <NavLink to={`${list.path}`} exact={true} key={index}>
                <li className={styles.sidebar_list_items}>
                  {list.icon}
                  {list.title}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
