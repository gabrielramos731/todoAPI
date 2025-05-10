import styles from "./TaskBoard.module.css";
import Task from "../task/Task";
import AddTask from "../addTask/AddTask";
import useTaskManager from "../../hooks/useTaskManager";

const TaskBoard = () => {
  const { tasks, addTask, deleteTask, toggleDone, sortTasks } = useTaskManager();

  return (
    <>
    
      <AddTask onAddTask={addTask} />
      <div className={styles.taskBoardStatus}>
        <p className={styles.taskCreated}>
          Tarefas criadas: <span className={styles.taskCount}>{tasks.length}</span>
        </p>
        <p className={styles.taskDone}>
          Concluídas: <span className={styles.taskDoneCount}>{tasks.filter((task) => task.completed).length}</span>
        </p>
      </div>
      <div className={styles.taskDiv}>
        {tasks.length === 0 ? (
          <p className={styles.noTaskMessage}>Nenhuma tarefa cadastrada.</p>
        ) : (
          sortTasks().map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={deleteTask}
              toggleDone={toggleDone}
            />
          ))
        )}
      </div>
    </>
  );
};

export default TaskBoard;
