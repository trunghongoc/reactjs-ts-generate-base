import { get } from 'lodash'

import { environments as development } from './development'
import { environments as testing } from './testing'
import { environments as production } from './production'
import { environments as uat } from './uat'

import { ENV_ENUM, IEnvList, IEnvItem } from './environment'

const currentEnv: IEnvItem | string =
  process.env.REACT_APP_ENV || ENV_ENUM.production

const envList: IEnvList = { development, testing, production, uat }

export const env: ENV_ENUM = get(envList, currentEnv)
