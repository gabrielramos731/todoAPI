import { useState, useEffect } from "react";
import { getTasks } from "../services/taskService";

type Tasktype = {
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
    const fetchData = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };

    fetchData();
  }, []);

  const addTask = (title: string) => {
    if (!title.trim() || tasks.some((task) => task.title === title)) {
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      title,
      body: "",
      completed: false,
      createDate: new Date(),
    };
    setTasks([...tasks, newTask]);
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

  return { tasks, addTask, deleteTask, toggleDone };
};

export default useTaskManager;
