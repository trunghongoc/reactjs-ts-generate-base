import { environments as development } from './development'
import { environments as testing } from './testing'
import { environments as production } from './production'
import { environments as uat } from './uat'

import { Environemt } from './environment'

interface ListENV {
  development: Environemt
  testing: Environemt
  production: Environemt
  uat: Environemt
}

const currentEnv: string = process.env.REACT_APP_ENV || 'development'

const listEnv: ListENV = { development, testing, production, uat }

export const env: Environemt = listEnv[currentEnv]
