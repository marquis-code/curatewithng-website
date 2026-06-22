import { gifts_api } from '~/api_factory/modules/gifts';

export const useGifts = () => {
  const getGifts = async (params: Record<string, any>) => {
    const response = await gifts_api.getGifts(params);
    return response.data;
  };

  const getGiftBySlug = async (slug: string) => {
    const response = await gifts_api.getGiftBySlug(slug);
    return response.data;
  };

  return { getGifts, getGiftBySlug };
};
