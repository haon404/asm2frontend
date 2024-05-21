export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie<string>("token")
    console.log(token && to.path === '/login')

    if (!token.value && to.path!== '/login' && to.path!== '/register' && to.path!== '/') {
        navigateTo('/login')
    }

    if (token.value && to.path === '/login') {
        navigateTo('/')
    }
})
