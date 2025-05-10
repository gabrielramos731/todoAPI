import axiosInstance from "../api/axiosInstance";
import { Tasktype } from "../hooks/useTaskManager";

export const getTasks = async ():Promise<Tasktype[]> => {
  const response = await axiosInstance.get("/");
  return response.data;
};

export const createTask = async (data: Omit<Tasktype, 'id'>):Promise<Tasktype> => {
  const response = await axiosInstance.post("/create/", data);
  return response.data;
}


