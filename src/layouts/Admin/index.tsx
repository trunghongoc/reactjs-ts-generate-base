import { FC } from 'react'

import { IProps } from './type'

import './style.scss'

export const AdminLayout: FC<IProps> = ({ children }: IProps): JSX.Element => {
  return (
    <>
      <div className="admin-layout">{children}</div>
    </>
  )
}
