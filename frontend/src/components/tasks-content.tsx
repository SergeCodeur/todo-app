import { useEffect } from "react";
import { useTasks } from "../hooks/useTasks";
import CreateTasksForm from "./forms/create-tasks-form";
import TaskLists from "./tasks-list";

const TaskContent = () => {
  const { error, tasks, createTask, loading, fetchTasks } = useTasks();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <main className="flex flex-col items-center justify-center h-dvh container">
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4 text-violet-800">
        Todo App
      </h1>
      <div className="max-w-2xl w-full mx-auto flex items-center flex-col justify-center">
        <CreateTasksForm createTask={createTask} />
        <div className="w-full border bg-violet-50/30 mt-8 h-96 overflow-y-scroll rounded-[20px] flex justify-center p-4">
          {tasks.length > 0 ? (
            <TaskLists tasks={tasks} loading={loading} />
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <p>No tasks</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default TaskContent;
