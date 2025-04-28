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
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.body);

  const handleTaskClick = () => {
    setIsBodyVisible((prev) => !prev);
  };

  const handleInputBlur = () => {
    setIsEditing(false); // Sai do modo de edição ao perder o foco
    // Aqui você pode adicionar lógica para salvar o texto editado, como uma chamada de API
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value); // Atualiza o texto enquanto o usuário digita
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false); // Sai do modo de edição ao pressionar Enter
      if (editedText.trim() !== task.body) {
        // Aqui você pode salvar o texto editado, se necessário
      }
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
        onClick={() => setIsEditing(true)} // Ativa o modo de edição ao clicar em qualquer lugar da div
      >
        <span className={styles.bodyText}>
          {isEditing ? (
            <input
              className={styles.inputBodyTask}
              type="text"
              value={editedText}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              autoFocus
              onKeyDown={handleInputKeyDown}
            />
          ) : (
            <p>{editedText ? editedText : "Clique aqui para escrever..."}</p> // Apenas exibe o texto
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
