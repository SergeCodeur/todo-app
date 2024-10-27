import axios, { AxiosError } from "axios";
import { CreateTaskDTO, Task, UpdateTaskDTO } from "../../types/task-type";

const BASE_URL = "http://localhost:3000/tasks";

export class APIError extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = "APIError";
  }
}

export const taskService = {
  getAllTasks: async (): Promise<Task[]> => {
    try {
      const response = await axios.get<Task[]>(BASE_URL);
      return response.data;
    } catch (error) {
      throw new APIError(
        "Erreur lors de la récupération des tâches",
        (error as AxiosError).response?.status
      );
    }
  },

  createTask: async (taskData: CreateTaskDTO): Promise<Task> => {
    try {
      const response = await axios.post<Task>(BASE_URL, taskData);
      return response.data;
    } catch (error) {
      throw new APIError(
        "Erreur lors de la création de la tâche",
        (error as AxiosError).response?.status
      );
    }
  },

  updateTask: async (id: string, taskData: UpdateTaskDTO): Promise<Task> => {
    try {
      const response = await axios.put<Task>(`${BASE_URL}/${id}`, taskData);
      return response.data;
    } catch (error) {
      throw new APIError(
        "Erreur lors de la mise à jour de la tâche",
        (error as AxiosError).response?.status
      );
    }
  },

  deleteTask: async (id: string): Promise<void> => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      throw new APIError(
        "Erreur lors de la suppression de la tâche",
        (error as AxiosError).response?.status
      );
    }
  },
};
