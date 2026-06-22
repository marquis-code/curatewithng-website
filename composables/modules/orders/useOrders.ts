import { orders_api } from '~/api_factory/modules/orders';

export const useOrders = () => {
  const createOrder = async (payload: any) => {
    const response = await orders_api.createOrder(payload);
    return response.data;
  };

  return { createOrder };
};
