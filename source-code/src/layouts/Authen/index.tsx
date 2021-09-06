import { FC } from 'react'

import { IProps } from './type'

import './style.scoped.scss'

export const AuthenLayout: FC<IProps> = ({ children }: IProps): JSX.Element => {
  return <div className="authen-layout">{children}</div>
}
