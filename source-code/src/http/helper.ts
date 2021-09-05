import { IUser } from 'services/user/type'
import { IAxiosHeader } from './type'

export const serialize: any = (obj: any): string => {
  const str: any = []
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  }
  return str.join('&')
}

export function authHeader(): IAxiosHeader {
  const userLocalStorage: string | null = localStorage.getItem('user') || '{}'
  const user: IUser = JSON.parse(userLocalStorage)

  if (user && user?.jwtToken) {
    return {
      'Authorization': `Bearer ${user?.jwtToken}`,
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  } else {
    return {
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
}

export const isExpiredJWT: any = (errResponse: any): boolean => {
  return (
    errResponse?.response?.status === 401 &&
    errResponse?.config &&
    !errResponse?.config?.__isRetryRequest
  )
}
