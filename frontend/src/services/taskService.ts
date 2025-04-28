import axiosInstance from "../api/axiosInstance";

export const getTasks = async () => {
  const response = await axiosInstance.get("/");
  return response.data;
};

export const getTaskById = async (id: number) => {
  const response = await axiosInstance.get(`/${id}`);
  return response.data;
};
