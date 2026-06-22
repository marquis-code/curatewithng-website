import { GATEWAY_ENDPOINT } from '../axios.config';

export const gifts_api = {
  getGifts: (params: Record<string, any>) => {
    return GATEWAY_ENDPOINT.get('/gifts', { params });
  },

  getGiftBySlug: (slug: string) => {
    return GATEWAY_ENDPOINT.get(`/gifts/${slug}`);
  },
};
