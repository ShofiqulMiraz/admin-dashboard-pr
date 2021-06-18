import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import styles from "./App.module.css";
import HomePage from "./pages/Homepage/Homepage";

export default function App() {
  return (
    <>
      <TopBar />
      <div className={styles.content_container}>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
        <div className={styles.main_content}>
          <HomePage />
        </div>
      </div>
    </>
  );
}
