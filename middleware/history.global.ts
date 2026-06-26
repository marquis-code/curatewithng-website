export default defineNuxtRouteMiddleware((to) => {
  // We only want to save non-auth routes as the intended destination
  if (!to.path.startsWith('/auth')) {
    const intendedRoute = useCookie('intended_route', { maxAge: 3600 * 24 * 7 });
    // Aggressively store the full path including query parameters
    intendedRoute.value = to.fullPath;
  }
});
