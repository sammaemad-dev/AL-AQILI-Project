import {
  addOrderApi,
  getOrdersApi,
  getOrderByIdApi,
  getAdminOrdersApi,
  updateOrderStatusApi,
} from "../api/orderApi";

// NOTE: the Postman collection has no saved example response for the
// /orders or /admin/orders endpoints, so the exact field names coming
// back from the API aren't confirmed. This maps a few likely shapes
// (based on the request bodies: items[{productId, quantity}],
// deliveryAddress) into what the UI needs. Adjust the lookups below
// if the real API uses different keys.
function mapOrderItem(raw) {
  if (!raw) return null;

  return {
    productId: raw.productId ?? raw.product?.id,
    productName: raw.productName ?? raw.product?.name ?? "",
    quantity: raw.quantity ?? 0,
    price: raw.price ?? raw.unitPrice ?? raw.product?.price ?? 0,
  };
}

function mapOrder(raw) {
  if (!raw) return null;

  return {
    id: raw.id ?? raw.orderId,
    status: raw.status ?? raw.orderStatus ?? "Pending",
    deliveryAddress: raw.deliveryAddress ?? raw.address ?? "",
    total: raw.total ?? raw.totalPrice ?? raw.totalAmount ?? 0,
    createdAt: raw.createdAt ?? raw.date ?? raw.orderDate ?? null,
    customerName:
      raw.customerName ?? raw.fullName ?? raw.user?.fullName ?? "",
    items: Array.isArray(raw.items) ? raw.items.map(mapOrderItem) : [],
  };
}

function unwrapList(data) {
  return Array.isArray(data)
    ? data
    : data?.items ?? data?.data ?? data?.orders ?? [];
}

// =========================
// Create Order
// =========================
export const createOrder = async ({ items, deliveryAddress }) => {
  const response = await addOrderApi({
    items: items.map(({ productId, quantity }) => ({ productId, quantity })),
    deliveryAddress,
  });

  return mapOrder(response.data);
};

// =========================
// Get My Orders (paginated)
// =========================
export const getOrders = async ({ page = 1, pageSize = 20 } = {}) => {
  const response = await getOrdersApi({ page, pageSize });
  return unwrapList(response.data).map(mapOrder);
};

// =========================
// Get Order By Id
// =========================
export const getOrderById = async (id) => {
  const response = await getOrderByIdApi(id);
  return mapOrder(response.data);
};

// =========================
// Admin: Get All Orders (paginated, optionally filtered by status)
// =========================
export const getAdminOrders = async ({
  status = "",
  page = 1,
  pageSize = 20,
} = {}) => {
  const response = await getAdminOrdersApi({ status, page, pageSize });
  return unwrapList(response.data).map(mapOrder);
};

// =========================
// Admin: Update Order Status
// =========================
export const updateOrderStatus = async (id, newStatus) => {
  const response = await updateOrderStatusApi(id, newStatus);
  return mapOrder(response.data) ?? { id, status: newStatus };
};
