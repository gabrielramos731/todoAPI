import styles from "./TaskBoard.module.css";
import Task from "../task/Task";
import AddTask from "../addTask/AddTask";
import useTaskManager from "../../hooks/useTaskManager";

const TaskBoard = () => {
  const { tasks, addTask, deleteTask, toggleDone } = useTaskManager();

  console.log(import.meta.env.VITE_API_URL);
  return (
    <>
      <AddTask onAddTask={addTask} />
      <div className={styles.mainTaskBoard}>
        <p className={styles.taskCreated}>
          Tarefas criadas: <span>{tasks.length}</span>
        </p>
        <p className={styles.taskDone}>
          Concluídas: <span>{tasks.filter((task) => task.completed).length}</span>
        </p>
      </div>
      <div className={styles.taskDiv}>
        {tasks.length === 0 ? (
          <p className={styles.noTaskMessage}>Nenhuma tarefa cadastrada.</p>
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onDone={toggleDone}
            />
          ))
        )}
      </div>
    </>
  );
};

export default TaskBoard;
