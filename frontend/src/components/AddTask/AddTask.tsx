import styles from "./addtask.module.css";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

type AddTaskProps = {
  onAddTask: (title: string) => void;
};

const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      onAddTask(taskTitle);
      setTaskTitle("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className={styles.addTaskMainDiv}>
      <input
        placeholder="Adicione uma nova tarefa"
        className={styles.inputTask}
        type="text"
        value={taskTitle}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        className={styles.taskButton}
        onClick={handleAddTask}
      >
        Criar
        <PlusCircle size={17} />
      </button>
    </div>
  );
};

export default AddTask;
