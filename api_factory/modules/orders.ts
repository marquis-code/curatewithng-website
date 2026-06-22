import { GATEWAY_ENDPOINT_WITH_AUTH } from '../axios.config';

export const orders_api = {
  createOrder: (payload: any) => {
    return GATEWAY_ENDPOINT_WITH_AUTH.post('/orders', payload);
  },
};
