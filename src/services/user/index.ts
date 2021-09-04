import { http } from 'http'
import { ILoginParams } from './type'

class UserService {
  login(params: ILoginParams): Promise<any> {
    return http
      .post('/login', params)
      .then((res: any): void => {
        return res
      })
      .catch((err: any): void => {
        return err
      })
  }

  getCurrentUser(params?: any): Promise<any> {
    return http.fetch('/current-user', params)
  }
}

export default new UserService()
