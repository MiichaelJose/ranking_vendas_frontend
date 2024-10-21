type Product = {
  price?: number;
  title?: string;
  quantity?: number;
};

type Order = {
  id?: number;
  uuid?: string;
  externalId?: string;
  projectId?: number;
  userParticipantId?: number;
  status?: "paid" | "pending" | "cancelled";
  value?: number;
  orderCreatedAt?: string;
  orderPaidAt?: string;
  updatedAt?: string;
  createdAt?: string;
  customerContactStatus?: "not_contacted" | "awaiting_contact" | "in_contact";
  products?: Product[];
  paymentMethod?: string;
};

export type OrderResponse = Order[];
