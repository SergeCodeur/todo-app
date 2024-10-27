import { Check } from "lucide-react";
import { useTasks } from "../hooks/useTasks";
import { Task } from "../types/task-type";
import DeleteTaskButton from "./ui/delete-task-btn";

const TaskItem = ({ task }: { task: Task }) => {
  const { updateTask, deleteTask } = useTasks();

  const handleToggleCompleted = () => {
    updateTask(task._id, { completed: !task.completed });
  };

  const handleDelete = () => {
    deleteTask(task._id);
  };

  return (
    <li className="w-full flex items-center gap-2">
      <button
        className="w-full p-[19.3px] flex flex-1 items-center justify-start gap-3 border border-violet-600 rounded-[10px] cursor-pointer"
        onClick={() => handleToggleCompleted()}
      >
        <span
          className={`${
            task.completed ? "bg-violet-200" : "bg-gray-200"
          } w-5 h-5 rounded-sm flex justify-center items-center`}
        >
          {task.completed && <Check className="text-violet-800 h-4 w-4" />}
        </span>
        <h3
          className={`${
            task.completed ? "line-through" : ""
          } text-xs text-left md:text-sm font-medium select-none text-violet-950 flex-1`}
        >
          {task.title.charAt(0).toUpperCase() + task.title.slice(1)}
        </h3>
      </button>
      <DeleteTaskButton handleDeleteTask={handleDelete} />
    </li>
  );
};

export default TaskItem;
