import { Trash2 } from "lucide-react";

const DeleteTaskButton = ({
  handleDeleteTask,
}: {
  handleDeleteTask: () => void;
}) => {
  return (
    <button
      className="w-8 h-8 rounded-full flex justify-center items-center bg-violet-500/20"
      onClick={handleDeleteTask}
    >
      <Trash2 className="w-4 h-4 text-violet-500" />
    </button>
  );
};

export default DeleteTaskButton;
