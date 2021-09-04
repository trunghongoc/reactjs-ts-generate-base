import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const paramsToObject: any = (entries: any): object => {
  const result: any = {}
  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tupple
    result[key] = value
  }
  return result
}
export const useQuery: any = (state: any): void => {
  const { search } = useLocation()

  const query: any = useMemo((): any => {
    return new URLSearchParams(search)
  }, [search])

  return paramsToObject(query.entries())
}
