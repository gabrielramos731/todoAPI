import styles from "./home.module.css";
import logo from "../../assets/Logo.svg";
import AddTask from "../../components/addTask/AddTask"
import TaskBoard from "../../components/taskBoard/TaskBoard"

const Home = () => {
  return (
    <>
      <div className={styles.mainHeader}>
        <img className={styles.logoImg} src={logo} alt="todo" />
      <AddTask/>
      </div>
      <TaskBoard/>
    </>
  );
};

export default Home;
