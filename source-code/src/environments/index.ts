import { envList } from './getAllEnvList'
import { environments as production } from './list/production'

import { ENV_ENUM, IEnvItem } from './type'

console.log('envList:', envList)

const currentEnv: IEnvItem | string =
  process.env.REACT_APP_ENV || ENV_ENUM.production

export const env: IEnvItem =
  envList.find((item: IEnvItem): boolean => item.envName === currentEnv) ||
  production
