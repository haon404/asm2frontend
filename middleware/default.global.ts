export default defineNuxtRouteMiddleware((to, from) => {
    const { authenticated } = useAuthStore()

    if (!authenticated && to.path!== '/login' && to.path!== '/register' && to.path!== '/') {
        return navigateTo('/login')
    }

    if (authenticated && to.path === '/login') {
        return navigateTo('/')
    }

})
