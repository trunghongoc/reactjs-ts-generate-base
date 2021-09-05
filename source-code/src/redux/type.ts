import { IUser } from 'services/user/type'
import { IRouterItem } from 'router/type'

export interface IUserState {
  currentUser: IUser | null
}

export interface IRouterState {
  current: IRouterItem | null
  histories: IRouterItem[]
}

export interface IStore {
  user: IUserState
  router: IRouterState
}
