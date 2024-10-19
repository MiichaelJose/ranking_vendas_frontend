import useFetch from "../hooks/useFetch";

type OrderResponse = {
  data: string;
};

export const getOrders = async (filter: { status: string }): Promise<OrderResponse> => {
  const response = await useFetch("/sessions", {
    method: "POST",
    filters: filter
  });

  if (!response.data) {
    throw new Error("Failed to login");
  }
  return response.data;
};

export default getOrders;