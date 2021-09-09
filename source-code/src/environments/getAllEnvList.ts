import { IEnvItem } from './type'

function importAll(r: any): any {
  const files: any = {}
  r.keys().forEach((item: any, index: number): any => {
    files[item.replace('./', '')] = r(item)
  })
  return files
}

function getAllEnv(): any {
  const list: any = importAll(require.context('./list', false, /\.(ts)$/))
  const result: IEnvItem[] = []

  for (const key in list) {
    if (list.hasOwnProperty(key)) {
      const currentEnv: { environments: IEnvItem } = list[key]
      result.push(currentEnv.environments)
    }
  }

  return result
}

export const envList: IEnvItem[] = getAllEnv()
