import axiosInstance from "../api/axiosInstance";
import { Tasktype } from "../hooks/useTaskManager";

export const getTasks = async (): Promise<Tasktype[]> => {
  const response = await axiosInstance.get("/");
  return response.data;
};

export const createTask = async (
  data: Omit<Tasktype, "id">
): Promise<Tasktype> => {
  const response = await axiosInstance.post("/create/", data);
  return response.data;
};

export const deleteTask = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/delete/${id}`);
};

export const updateTask = async (data: Tasktype): Promise<Tasktype> => {
  const response = await axiosInstance.put(`/update/${data.id}`, data);
  return response.data;
};
