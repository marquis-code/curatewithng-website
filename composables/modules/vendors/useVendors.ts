import { vendors_api } from '~/api_factory/modules/vendors';

export const useVendors = () => {
  const getVendors = async (params: Record<string, any>) => {
    const response = await vendors_api.getVendors(params);
    return response.data;
  };

  const getVendorBySlug = async (slug: string) => {
    const response = await vendors_api.getVendorBySlug(slug);
    return response.data;
  };

  return { getVendors, getVendorBySlug };
};
