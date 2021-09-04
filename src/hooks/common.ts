import { useRef, useEffect } from 'react'

export const usePrevious: any = (state: any): void => {
  const ref: any = useRef()

  useEffect((): void => {
    ref.current = state
  }, [state])

  return ref.current
}
