import { auth_api } from '~/api_factory/modules/auth';
import { useUser } from './user';

export const useAuth = () => {
  const { setUser } = useUser();

  const login = async (payload: any) => {
    const response = await auth_api.login(payload);
    const data = response.data?.data || response.data;
    setUser(data.user || data);
    return data;
  };

  const register = async (payload: any) => {
    const response = await auth_api.register(payload);
    const data = response.data?.data || response.data;
    setUser(data.user || data);
    return data;
  };

  const firebaseGoogleLogin = async (payload: { token: string }) => {
    const response = await auth_api.firebaseGoogleLogin(payload);
    const data = response.data?.data || response.data;
    setUser(data.user || data);
    return data;
  };

  const fetchProfile = async () => {
    const response = await auth_api.getProfile();
    const data = response.data?.data || response.data;
    setUser(data);
    return data;
  };

  return { login, register, firebaseGoogleLogin, fetchProfile };
};
