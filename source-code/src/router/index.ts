import { lazy } from 'react'
import { IRouterItem, ROUTER_NAME_LIST } from './type'
import { LAYOUT_NAME } from 'layouts/type'

export const routers: IRouterItem[] = [
  {
    path: '/',
    exact: true,
    component: lazy((): Promise<any> => import('pages/Home')),
    layout: LAYOUT_NAME.ADMIN,
    isPrivate: true,
    name: ROUTER_NAME_LIST.HOME
  },
  {
    path: '/login',
    exact: false,
    component: lazy((): Promise<any> => import('pages/Login')),
    layout: LAYOUT_NAME.AUTHEN,
    isPrivate: false,
    name: ROUTER_NAME_LIST.LOGIN
  },
  {
    path: '**',
    exact: true,
    component: lazy((): Promise<any> => import('pages/Home')),
    layout: LAYOUT_NAME.ADMIN,
    isPrivate: true,
    name: ROUTER_NAME_LIST.HOME
  }
]
