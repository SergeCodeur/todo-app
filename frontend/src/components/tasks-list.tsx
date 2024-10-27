import { Task } from "../types/task-type";
import SkeletonTaskItem from "./skeletons/skeleton-task-item";
import TaskItem from "./task-item";

const TaskLists = ({ tasks, loading }: { tasks: Task[]; loading: boolean }) => {
  return (
    <ul className="flex flex-col w-full gap-3 items-start">
      {tasks.map((task) => (
        <>
          {loading ? (
            <SkeletonTaskItem />
          ) : (
            <TaskItem key={task._id} task={task} />
          )}
        </>
      ))}
    </ul>
  );
};

export default TaskLists;
