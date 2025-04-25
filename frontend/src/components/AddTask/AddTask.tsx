import styles from "./addtask.module.css"
import {PlusCircle} from "lucide-react";

const AddTask = () => {
  
  
  return (
    <div className={styles.mainContent}>
      <input
        placeholder="Adicione uma nova tarefa"
        className={styles.inputTask}
        type="text"
      />
      <button type="submit" className={styles.taskButton}>
        Criar
        <PlusCircle size={17} />
      </button>
    </div>
  );
};

export default AddTask;
