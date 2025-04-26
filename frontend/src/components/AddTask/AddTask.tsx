import styles from "./addtask.module.css";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

type AddTaskProps = {
  onAddTask: (description: string) => void;
};

const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [taskDescription, setTaskDescription] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(event.target.value);
  };

  const handleAddTask = () => {
    if (taskDescription.trim()) {
      onAddTask(taskDescription);
      setTaskDescription("");
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
        value={taskDescription}
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
