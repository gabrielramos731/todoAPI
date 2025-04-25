import styles from "./home.module.css";
import logo from "../../assets/Logo.svg";
import AddTask from "../../components/addTask/AddTask"

const Home = () => {
  return (
    <>
      <header className={styles.mainHeader}>
        <img className={styles.logoImg} src={logo} alt="todo" />
      </header>
      <AddTask/>
    </>
  );
};

export default Home;
