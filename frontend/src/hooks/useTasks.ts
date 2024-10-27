// src/hooks/useTasks.ts
import { useCallback } from "react";
import { taskService } from "../services/api/taskService";
import { useTaskContext } from "../store/task-context";
import { CreateTaskDTO, UpdateTaskDTO } from "../types/task-type";

export const useTasks = () => {
  const { state, dispatch } = useTaskContext();

  const fetchTasks = useCallback(async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const tasks = await taskService.getAllTasks();
      dispatch({ type: "SET_TASKS", payload: tasks });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload:
          error instanceof Error ? error.message : "Une erreur est survenue",
      });
    }
  }, [dispatch]);

  const createTask = async (taskData: CreateTaskDTO) => {
    try {
      const newTask = await taskService.createTask(taskData);
      dispatch({ type: "ADD_TASK", payload: newTask });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload:
          error instanceof Error ? error.message : "Erreur lors de la création",
      });
    }
  };

  const updateTask = async (id: string, taskData: UpdateTaskDTO) => {
    try {
      const updatedTask = await taskService.updateTask(id, taskData);
      dispatch({ type: "UPDATE_TASK", payload: updatedTask });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload:
          error instanceof Error
            ? error.message
            : "Erreur lors de la mise à jour",
      });
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await taskService.deleteTask(id);
      dispatch({ type: "DELETE_TASK", payload: id });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload:
          error instanceof Error
            ? error.message
            : "Erreur lors de la suppression",
      });
    }
  };

  return {
    tasks: state.tasks,
    loading: state.loading,
    error: state.error,
    createTask,
    updateTask,
    deleteTask,
    fetchTasks,
  };
};
