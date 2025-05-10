import axiosInstance from "../api/axiosInstance";

export const getTasks = async () => {
  const response = await axiosInstance.get("/");
  return response.data;
};


