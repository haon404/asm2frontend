export default defineNuxtRouteMiddleware((to, from) => {
    const { authenticated } = useAuthStore()
    console.log(authenticated && to.path === '/login')

    if (!authenticated && to.path!== '/login' && to.path!== '/register' && to.path!== '/') {
        return navigateTo('/login')
    }

    if (authenticated && to.path === '/login') {
        return navigateTo('/')
    }

})
