import { useState, useEffect } from "react";
import { getTasks, createTask } from "../services/taskService";

export type Tasktype = {
  id: number;
  title: string;
  body: string;
  completed: boolean;
  createDate: Date;
};

const useTaskManager = () => {
  const [tasks, setTasks] = useState<Tasktype[]>([]);

  // Load Tasks from API on component mount
  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const addTask = (title: string) => {
    if (!title.trim() || tasks.some((task) => task.title === title)) {
      return;
    }

    const newTask: Tasktype = {
      id: tasks.length + 1,
      title,
      body: "Clique aqui para adicionar detalhes...",
      completed: false,
      createDate: new Date(),
    };

    const create = async () => {
      try {
        const successful = await createTask(newTask);
        if (successful) setTasks([...tasks, newTask]);
      } catch (err) {
        console.error("Erro ao criar task: ", err);
      }
    };

    create();
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const sortTasks = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (a.completed === b.completed) {
        return (
          new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
        );
      }
      return a.completed ? 1 : -1;
    });
    return sortedTasks;
  };

  return { tasks, addTask, deleteTask, toggleDone, sortTasks };
};

export default useTaskManager;
