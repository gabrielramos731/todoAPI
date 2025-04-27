import { Trash2 } from "lucide-react";

type TaskProps = {
  task: {
    id: number;
    title: string;
    body: string;
    completed: boolean;
    createDate: Date;
  };
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
};

const Task = ({ task, onDelete, onDone }: TaskProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onDone(task.id)}
      />
      <span
        style={
          task.completed
            ? {
                textDecoration: "line-through",
                color: "#808080",
              }
            : undefined
        }
      >
        {task.title}
      </span>
      <span>{task.body}</span>
      <span>{new Date(task.createDate).toLocaleDateString()}</span>
      <Trash2 onClick={() => onDelete(task.id)} />
    </div>
  );
};

export default Task;
