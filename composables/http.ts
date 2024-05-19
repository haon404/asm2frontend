import { type NitroFetchOptions, type NitroFetchRequest } from 'nitropack'

export const useHttp = <T>(url: string, options?: NitroFetchOptions<NitroFetchRequest>) => {
  const baseUrl = 'http://localhost:8080/api/v1'
  console.log()
  return $fetch<T>(baseUrl + url, {
    ...options
  })
}
