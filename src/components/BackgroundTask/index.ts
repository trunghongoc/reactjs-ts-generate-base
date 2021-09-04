import { FC, useEffect } from 'react'
import BackgroundService from 'services/background'

export const BackgroundTask: FC = (): JSX.Element => {
  useEffect((): void => {
    BackgroundService.watch()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <div />
}
