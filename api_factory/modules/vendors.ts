import { GATEWAY_ENDPOINT } from '../axios.config';

export const vendors_api = {
  getVendors: (params: Record<string, any>) => {
    return GATEWAY_ENDPOINT.get('/vendors', { params });
  },
  getVendorBySlug: (slug: string) => {
    return GATEWAY_ENDPOINT.get(`/vendors/${slug}`);
  },
};
