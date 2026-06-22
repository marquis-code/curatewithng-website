import { GATEWAY_ENDPOINT } from '../axios.config';

export const curator_api = {
  generateCuration: (payload: any) => {
    return GATEWAY_ENDPOINT.post('/ai-curator/generate', payload);
  },
};
