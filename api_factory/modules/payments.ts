import { GATEWAY_ENDPOINT_WITH_AUTH } from '../axios.config';

export const payments_api = {
  initiatePayment: (payload: any) => {
    return GATEWAY_ENDPOINT_WITH_AUTH.post('/payments/initiate', payload);
  },
  initiateSourcingPayment: (id: string) => {
    return GATEWAY_ENDPOINT_WITH_AUTH.post(`/payments/sourcing/${id}/initiate`);
  },
};
