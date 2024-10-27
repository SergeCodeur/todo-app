import TaskContent from "./components/tasks-content";
import { TaskProvider } from "./store/task-context";

const App = () => {
  return (
    <TaskProvider>
      <TaskContent />
    </TaskProvider>
  );
};

export default App;
