import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import styles from "./App.module.css";
import HomePage from "./pages/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage";
import NotFound from "./components/NotFound/NotFound";
import UpdateUserPage from "./pages/UpdateUserPage/UpdateUserPage";
import AddNewUser from "./pages/AddNewUser/AddNewUser";

export default function App() {
  return (
    <Router>
      <TopBar />
      <div className={styles.content_container}>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
        <div className={styles.main_content}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/users">
              <UsersPage />
            </Route>
            <Route path="/user/update/:id">
              <UpdateUserPage />
            </Route>
            <Route path="/user/addnewuser">
              <AddNewUser />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
