import { useMemo } from 'react'

export const useCheckIsLogedIn: any = (user: any): any => {
  const isLogin: boolean = useMemo((): boolean => {
    return !!user
  }, [user])

  return isLogin
}
