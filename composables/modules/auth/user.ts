import { useCookie, useRouter } from '#imports'

export const useUser = () => {
  const user = useCookie<any>('user_data', { default: () => null })
  const token = useCookie<string | null>('token', { default: () => null })
  
  const logOut = () => {
    user.value = null
    token.value = null
    
    if (import.meta.client) {
      window.location.href = '/auth/login'
    }
  }

  const setUser = (userData: any, userToken?: string) => {
    user.value = userData
    if (userToken) {
      token.value = userToken
    }
  }

  return { user, token, logOut, setUser }
}
