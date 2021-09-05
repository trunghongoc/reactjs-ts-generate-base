import { pick } from 'lodash'
import store from 'redux/store'
import {
  setRouterConfig,
  addToRouterHistories
} from 'redux/reducers/routerSlice'

import { IRouterItem } from 'router/type'

export class RouterService {
  handleAfterRouteEnter(currentRoute: IRouterItem): void {
    setTimeout((): void => {
      const item: object = pick(currentRoute, [
        'path',
        'exact',
        'isPrivate',
        'layout',
        'name'
      ])

      store.dispatch(setRouterConfig(item))
      store.dispatch(addToRouterHistories(item))
    })
  }
}

export default new RouterService()
