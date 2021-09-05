export enum ENV_ENUM {
  development = 'development',
  testing = 'testing',
  production = 'production',
  uat = 'uat'
}

export interface IEnvItem {
  envName: ENV_ENUM
  fileConfigPath: string
}

export interface IEnvList {
  development: IEnvItem
  testing: IEnvItem
  production: IEnvItem
  uat: IEnvItem
}
