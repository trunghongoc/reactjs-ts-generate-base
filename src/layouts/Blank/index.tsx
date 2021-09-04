import { FC } from 'react'
import { IProps } from './type'

export const BlankLayout: FC<IProps> = ({ children }: IProps): JSX.Element => {
  return <div className="blank-layout">{children}</div>
}
