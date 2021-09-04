import { LAYOUT_NAME } from 'layouts/type'

export enum ROUTER_NAME_LIST {
  HOME = 'HOME',
  LOGIN = 'LOGIN'
}

export interface IRouterItem {
  component: any
  exact?: boolean
  path: string
  isPrivate?: boolean
  validate?: any
  layout: LAYOUT_NAME
  name: ROUTER_NAME_LIST
}
