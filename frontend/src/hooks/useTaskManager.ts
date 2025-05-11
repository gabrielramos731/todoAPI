import { useState } from "react";
import { getTasks, createTask, deleteTask, updateTask } from "../services/taskService";

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
  const loadTasks = async () => {
    try {
      await getTasks().then(setTasks);
    } catch (err) {
      console.error("Erro ao carregar tasks: ", err);
    }
  };

  const addTask = (title: string) => {
    if (!title.trim() || tasks.some((task) => task.title === title)) {
      return;
    }

    const newTask = {
      title,
      body: "Clique aqui para adicionar detalhes...",
      completed: false,
      createDate: new Date(),
    };

    const create = async () => {
      try {
        const successful = await createTask(newTask);
        if (successful) loadTasks();
      } catch (err) {
        console.error("Erro ao criar task: ", err);
      }
    };

    create();
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    deleteTask(id);
  };

  const toggleDone = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if(task.id === id) {
          try {
            const updatedTask = {...task, completed: !task.completed}
            updateTask(updatedTask)
            return updatedTask
          }catch(err) {
            console.error("Erro ao atualizar task: ", err);
          }
        }
        return task
      }
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

  return { tasks, addTask, removeTask, toggleDone, sortTasks, loadTasks };
};

export default useTaskManager;
