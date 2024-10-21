import { OrderResponse } from "@/shared/types/OrdersTypes";

interface FilterParams {
  contactStatus?: string;
  paymentMethod?: string;
  paymentStatus?: string;
}

export const getOrders = async (filters: FilterParams): Promise<OrderResponse> => {
  const userParticipantId = 100; //localStorage.getItem("userParticipantId");

  if (!userParticipantId) {
    throw new Error("userParticipantId não encontrado no localStorage.");
  }

  const baseUrl = "http://localhost:3009/webhook/orders";

  const params: Array<string> = [`userParticipantId=${encodeURIComponent(userParticipantId)}`];

  if (filters.contactStatus) {
    params.push(`contactStatus=${encodeURIComponent(filters.contactStatus)}`);
  }
  if (filters.paymentMethod) {
    params.push(`paymentMethod=${encodeURIComponent(filters.paymentMethod)}`);
  }
  if (filters.paymentStatus) {
    params.push(`paymentStatus=${encodeURIComponent(filters.paymentStatus)}`);
  }

  const queryString = params.join("&");

  const response = await fetch(`${baseUrl}?${queryString}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar pedidos");
  }

  return response.json();
};

export default getOrders;
