import { useCookie, useRouter } from '#imports'

export const useUser = () => {
  const user = useCookie<any>('user_data', { default: () => null })
  
  const logOut = () => {
    user.value = null
    
    if (import.meta.client) {
      window.location.href = '/auth/login'
    }
  }



  const setUser = (userData: any) => {
    user.value = userData
  }

  return { user, logOut, setUser }
}
