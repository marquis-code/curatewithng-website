export default defineNuxtRouteMiddleware((to) => {
  const user = useCookie('user_data');
  if (!user.value && to.path !== '/auth/login') {
    return navigateTo('/auth/login');
  }
});
