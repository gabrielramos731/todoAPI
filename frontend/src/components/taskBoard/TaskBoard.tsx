import styles from "./TaskBoard.module.css";
import Task from "../task/Task";
import AddTask from "../addTask/AddTask";
import useTaskManager from "../../hooks/useTaskManager";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const TaskBoard = () => {
  const { tasks, addTask, removeTask, toggleDone, sortTasks, loadTasks, upgradeTask } = useTaskManager();

  useEffect(()=> {
    loadTasks();
  }, [])

  return (
    <>
      <AddTask onAddTask={addTask} />
      <div className={styles.taskBoardStatus}>
        <p className={styles.taskCreated}>
          Tarefas criadas:{" "}
          <span className={styles.taskCount}>{tasks.length}</span>
        </p>
        <p className={styles.taskDone}>
          Concluídas:{" "}
          <span className={styles.taskDoneCount}>
            {tasks.filter((task) => task.completed).length}
          </span>
        </p>
      </div>
      <div className={styles.taskDiv}>
        {tasks.length === 0 ? (
          <p className={styles.noTaskMessage}>Nenhuma tarefa cadastrada.</p>
        ) : (
          <AnimatePresence>
            {sortTasks().map((task) => (
              <motion.div key={task.id} layout>
                <Task
                  key={task.id}
                  task={task}
                  onDelete={removeTask}
                  toggleDone={toggleDone}
                  upgradeTask={upgradeTask}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </>
  );
};

export default TaskBoard;
