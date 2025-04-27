import { useState } from "react";
import { Trash2 } from "lucide-react";
import styles from "./Task.module.css";

type TaskProps = {
  task: {
    id: number;
    title: string;
    body: string;
    completed: boolean;
    createDate: Date;
  };
  onDelete: (id: number) => void;
  toggleDone: (id: number) => void;
};

const Task = ({ task, onDelete, toggleDone }: TaskProps) => {
  const [isBodyVisible, setIsBodyVisible] = useState(false);

  const handleTaskClick = () => {
    setIsBodyVisible((prev) => !prev);
  };

  return (
    <div
      className={styles.mainDivTask}
    >
      <div className={styles.resumeTask} onClick={handleTaskClick}>
        <span>
          <input
            className={styles.checkBoxTask}
            type="checkbox"
            checked={task.completed}
            onClick={(e) => e.stopPropagation()}
            onChange={() => {
              toggleDone(task.id);
            }}
          />
          <span className={styles.titleTask}>{task.title}</span>
        </span>
        <Trash2
          className={styles.trashIcon}
          size={20}
          onClick={(e) => {
            e.stopPropagation();
            onDelete(task.id);
          }}
        />
      </div>

      <div
        className={styles.bodyTask}
        style={{ display: isBodyVisible ? "flex" : "none" }}
      >
        <span>{task.body}</span>
        <span className={styles.date}>
          {new Date(task.createDate).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default Task;
