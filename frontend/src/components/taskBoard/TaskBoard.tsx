import styles from "./TaskBoard.module.css";
import Task from "../task/Task";
import { useState } from "react";
import AddTask from "../addTask/AddTask";

type Tasktype = {
  id: number;
  description: string;
  isDone: boolean;
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState<Tasktype[]>([
    {
      id: 1,
      description: "Tarefa 1",
      isDone: true,
    },
    {
      id: 2,
      description: "Tarefa 2",
      isDone: false,
    },
    {
      id: 3,
      description: "Tarefa 3",
      isDone: false,
    },
  ]);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const addTask = (description: string) => {
    const newTask = {
      id: tasks.length + 1,
      description,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <AddTask onAddTask={addTask} />
      <div className={styles.mainTaskBoard}>
        <p className={styles.taskCreated}>
          Tarefas criadas: <span>{tasks.length}</span>
        </p>
        <p className={styles.taskDone}>
          Concluídas: <span>{tasks.filter((task) => task.isDone).length}</span>
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
