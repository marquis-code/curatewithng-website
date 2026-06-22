import { useToast } from 'vue-toastification'

export const useCustomToast = () => {
  const showToast = ({ title, message, toastType, duration = 3000 }: { title: string, message: string, toastType: 'success' | 'error' | 'info' | 'warning', duration?: number }) => {
    // Only show toast on client side
    if (!import.meta.client) return;
    
    const toast = useToast()
    if (!toast) return;

    if (toastType === 'success') {
      toast.success(message, { timeout: duration })
    } else if (toastType === 'error') {
      toast.error(message, { timeout: duration })
    } else if (toastType === 'info') {
      toast.info(message, { timeout: duration })
    } else if (toastType === 'warning') {
      toast.warning(message, { timeout: duration })
    }
  }

  return { showToast }
}
