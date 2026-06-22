import { curator_api } from '~/api_factory/modules/curator';

export const useCurator = () => {
  const generateCuration = async (payload: any) => {
    const response = await curator_api.generateCuration(payload);
    return response.data;
  };

  return { generateCuration };
};
