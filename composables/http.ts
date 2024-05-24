import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack'

export const useHttp = <T>(url: string, options?: NitroFetchOptions<NitroFetchRequest>) => {
  const token = useCookie<string>('token')
  const baseUrl = ref('http://localhost:8080/api/v1')

  if(token.value) {
    return $fetch<T>(baseUrl.value + url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token.value}`
      },
      ...options,
    })
  }

  return $fetch<T>(baseUrl.value + url, {
    method: 'GET',
    ...options,
  })
}
