import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack'

export const useHttp = <T>(url: string, options?: NitroFetchOptions<NitroFetchRequest>) => {
  const baseUrl = ref('http://localhost:8080/api/v1')
  return $fetch<T>(baseUrl.value + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  })
}
