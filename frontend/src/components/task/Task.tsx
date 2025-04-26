import { Trash2 } from "lucide-react";

type TaskProps = {
  task: {
    id: number;
    description: string;
    isDone: boolean;
  };
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
};

const Task = ({ task, onDelete, onDone }: TaskProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => onDone(task.id)}
      />
      <span
        style={
          task.isDone
            ? {
                textDecoration: "line-through",
                color: "#808080",
              }
            : undefined
        }
      >
        {task.description}
      </span>
      <Trash2 onClick={() => onDelete(task.id)} />
    </div>
  );
};

export default Task;
