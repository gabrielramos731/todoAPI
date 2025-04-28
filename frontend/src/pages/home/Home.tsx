import styles from "./home.module.css";
import logo from "../../assets/Logo.svg";
import TaskBoard from "../../components/taskBoard/TaskBoard";

const Home = () => {
  return (
    <>
      <header className={styles.mainHeader}>
        <img className={styles.logoImg} src={logo} alt="todo" />
      </header>
      <main className={styles.mainContainer}>
        <TaskBoard />
      </main>
    </>
  );
};

export default Home;
