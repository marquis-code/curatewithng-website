import { payments_api } from '~/api_factory/modules/payments';

export const usePayments = () => {
  const initiatePayment = async (payload: any) => {
    const response = await payments_api.initiatePayment(payload);
    return response.data?.data || response.data;
  };

  return { initiatePayment };
};
