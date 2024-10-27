import { LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { CreateTaskDTO } from "../../types/task-type";

interface CreateTasksFormProps {
  createTask: (task: CreateTaskDTO) => Promise<void>;
}

const CreateTasksForm = ({ createTask }: CreateTasksFormProps) => {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask: CreateTaskDTO = {
        title: title.trim(),
        completed: false,
      };
      try {
        await createTask(newTask);
        setTitle("");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-2xl flex md:flex-row flex-col gap-2 md:gap-4 bg-white"
    >
      <input
        type="text"
        name="title"
        placeholder="task title"
        className="bg-violet-200 p-3 md:p-4 w-full rounded  placeholder:text-xs md:placeholder:text-sm text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50 font-ginter"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="py-3 px-3.5 md:py-4 md:px-8 bg-violet-800 max-sm:w-full rounded text-violet-200 font-medium text-xs md:text-sm cursor-pointer flex justify-center items-center w-fit text-nowrap"
        disabled={isLoading}
      >
        {isLoading ? (
          <LoaderCircle className="w-6 h-6 animate-spin" />
        ) : (
          "Create"
        )}
      </button>
    </form>
  );
};

export default CreateTasksForm;
