import { GATEWAY_ENDPOINT, GATEWAY_ENDPOINT_WITH_AUTH } from '../axios.config';

export const auth_api = {
  register: (payload: any) => {
    return GATEWAY_ENDPOINT.post('/auth/register', payload);
  },

  login: (payload: any) => {
    return GATEWAY_ENDPOINT.post('/auth/login', payload);
  },

  firebaseGoogleLogin: (payload: { token: string }) => {
    return GATEWAY_ENDPOINT.post('/auth/firebase/google', payload);
  },

  logout: () => {
    return GATEWAY_ENDPOINT_WITH_AUTH.post('/auth/logout');
  },

  getProfile: () => {
    return GATEWAY_ENDPOINT_WITH_AUTH.get('/users/me');
  },

  updateProfile: (payload: any) => {
    return GATEWAY_ENDPOINT_WITH_AUTH.patch('/users/me', payload);
  },

  addRecipient: (payload: any) => {
    return GATEWAY_ENDPOINT_WITH_AUTH.post('/users/me/recipients', payload);
  },

  removeRecipient: (index: number) => {
    return GATEWAY_ENDPOINT_WITH_AUTH.delete(`/users/me/recipients/${index}`);
  },

  toggleSavedGift: (giftId: string) => {
    return GATEWAY_ENDPOINT_WITH_AUTH.post(`/users/me/saved-gifts/${giftId}`);
  },
};
