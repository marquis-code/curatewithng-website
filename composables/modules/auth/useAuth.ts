import { auth_api } from '~/api_factory/modules/auth';
import { useUser } from './user';

export const useAuth = () => {
  const { setToken, setUser } = useUser();

  const login = async (payload: any) => {
    const response = await auth_api.login(payload);
    setToken(response.data.accessToken);
    setUser(response.data.user);
    return response.data;
  };

  const register = async (payload: any) => {
    const response = await auth_api.register(payload);
    setToken(response.data.accessToken);
    setUser(response.data.user);
    return response.data;
  };

  const firebaseGoogleLogin = async (payload: { token: string }) => {
    const response = await auth_api.firebaseGoogleLogin(payload);
    setToken(response.data.accessToken);
    setUser(response.data.user);
    return response.data;
  };

  const fetchProfile = async () => {
    const response = await auth_api.getProfile();
    setUser(response.data);
    return response.data;
  };

  return { login, register, firebaseGoogleLogin, fetchProfile };
};
