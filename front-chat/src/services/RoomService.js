import axiosInstance from "../config/AxiosHelper";

export const createRoomApi = async (roomDetail) => {
  const response = await axiosInstance.post(`/api/v1/rooms`, roomDetail, {
    headers: {
      "Content-Type": "text/plain",
    },
    withCredentials: true
  });
  return response.data;
};

export const joinChatApi = async (roomId) => {
  const response = await axiosInstance.get(`/api/v1/rooms/${roomId}`, {
    withCredentials: true
  });
  return response.data;
};

export const getMessagess = async (roomId, size = 50, page = 0) => {
  const response = await axiosInstance.get(
    `/api/v1/rooms/${roomId}/messages?size=${size}&page=${page}`,
    {
      withCredentials: true
    }
  );
  return response.data;
};
