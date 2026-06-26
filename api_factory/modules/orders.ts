import { GATEWAY_ENDPOINT_WITH_AUTH } from '../axios.config';

export const orders_api = {
  createOrder: (payload: any) => {
    return GATEWAY_ENDPOINT_WITH_AUTH.post('/orders', payload);
  },
  getOrders: () => {
    return GATEWAY_ENDPOINT_WITH_AUTH.get('/orders');
  },
  getOrderById: (id: string) => {
    return GATEWAY_ENDPOINT_WITH_AUTH.get(`/orders/${id}`);
  },
};
