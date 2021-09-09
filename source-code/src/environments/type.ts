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
