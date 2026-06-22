export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token');
  if (!token.value && to.path !== '/auth/login') {
    return navigateTo('/auth/login');
  }
});
