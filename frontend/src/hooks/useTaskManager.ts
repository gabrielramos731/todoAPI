import { useState } from "react";

type Tasktype = {
  id: number;
  description: string;
  isDone: boolean;
};

const useTaskManager = () => {
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

  const addTask = (description: string) => {
    if (!description.trim() || tasks.some((task) => task.description === description)) {
      return;
    }

    const newTask = {
      id: tasks.length + 1, 
      description,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

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

  return { tasks, addTask, deleteTask, toggleDone };
};

export default useTaskManager;