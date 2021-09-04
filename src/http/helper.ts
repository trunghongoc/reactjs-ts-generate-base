import { UserType } from 'services/user/type.d'
import { IAxiosHeader } from './type'

export const serialize: any = (obj: object): string => {
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
  const user: UserType = JSON.parse(userLocalStorage)

  if (user && user.signInUserSession?.idToken?.jwtToken) {
    return {
      'Authorization': `Bearer ${user.signInUserSession?.idToken?.jwtToken}`,
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
