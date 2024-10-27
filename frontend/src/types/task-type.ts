export interface Task {
  _id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTaskDTO {
  title: string;
  completed?: boolean;
}

export interface UpdateTaskDTO {
  title?: string;
  completed?: boolean;
}
