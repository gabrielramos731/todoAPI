import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Tasktype } from "../../hooks/useTaskManager";
import styles from "./Task.module.css";

type TaskProps = {
  task: Tasktype;
  onDelete: (id: number) => void;
  toggleDone: (id: number) => void;
  upgradeTask: (task: Tasktype) => void;
};

const Task = ({task, onDelete, toggleDone, upgradeTask }: TaskProps) => {
  const [isBodyVisible, setIsBodyVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.body);
  const handleTaskClick = () => {
    setIsBodyVisible((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  const handleInputFinish = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if ("key" in e && e.key !== "Enter") return; 
    setIsEditing(false);
    if (editedText.trim() !== task.body) {
      upgradeTask({...task, body: editedText })
    }
  };

  return (
    <div className={styles.mainDivTask}>
      <div className={styles.resumeTask} onClick={handleTaskClick}>
        <span className={styles.titleCheckboxSpan}>
          <input
            className={styles.checkBoxTask}
            type="checkbox"
            checked={task.completed}
            onClick={(e) => e.stopPropagation()}
            onChange={() => {
              toggleDone(task.id);
            }}
          />
          <h2 className={styles.titleTask}>{task.title}</h2>
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
        onClick={() => setIsEditing(true)}
      >
        <span className={styles.bodyText}>
          {isEditing ? (
            <input
              className={styles.inputBodyTask}
              type="text"
              value={editedText}
              onChange={handleInputChange}
              onBlur={handleInputFinish}
              autoFocus
              onKeyDown={handleInputFinish}
            />
          ) : (
            <p className={styles.bodyDescription}>
              {editedText ? editedText : "Clique aqui para escrever..."}
            </p>
          )}
        </span>
        <span className={styles.date}>
          {new Date(task.createDate).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default Task;
