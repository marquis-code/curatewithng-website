import { useCookie, useRouter } from '#imports'

export const useUser = () => {
  const token = useCookie<string | null>('token', { default: () => null })
  const user = useCookie<any>('user_data', { default: () => null })
  
  const logOut = () => {
    token.value = null
    user.value = null
    
    if (import.meta.client) {
      window.location.href = '/auth/login'
    }
  }

  const setToken = (newToken: string) => {
    token.value = newToken
  }

  const setUser = (userData: any) => {
    user.value = userData
  }

  return { token, user, logOut, setToken, setUser }
}
