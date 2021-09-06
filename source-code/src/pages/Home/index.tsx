import { FC } from 'react'
import UserService from 'services/user'

import './style.scoped.scss'

const Home: FC = (): JSX.Element => {
  return (
    <div>
      <h1>Home</h1>

      <button
        onClick={(): any => UserService.getCurrentUser({ name: 'trunghongoc' })}
      >
        Fetch API (run user service)
      </button>
    </div>
  )
}

export default Home
