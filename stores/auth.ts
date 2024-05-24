import { defineStore } from 'pinia'
import type { User } from '~/types/User'

export const useAuthStore = defineStore('Auth', () => {
  const user = ref<User | null>()
  const authenticated = ref(false)
  const token = useCookie<string | null>('token')

  async function authenticateUser(email: string, password: string) {
    const authentication = btoa(email + ':' + password)
    await useHttp<string>(`/login`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${authentication}`,
      },
    }).then((response) => {
      token.value = response
      console.log(response)
    }).catch(e => console.log(e))

    await useHttp<User>(`/user`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).then((response) => {
      user.value = response
      authenticated.value = true
    }).catch(e => console.log(e))
  }

  function logoutUser() {
    token.value = null
    user.value = null
    authenticated.value = false
    navigateTo('/login')
  }

  return { authenticateUser, user, authenticated, logoutUser }
}, {persist: true})
