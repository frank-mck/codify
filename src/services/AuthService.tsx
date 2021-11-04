import auth from './auth';
import { SignupMsg } from '../Pages/SignUp/SignupEnums'

class AuthDataService {
  async searchUser(user: any) {
    const users = await auth.get('/users');
    const findUser = users.data.find((person: any) => person.username === user.username || person.email === user.email);
    if (!findUser) {
      return SignupMsg.success
    } else {
      return SignupMsg.unsuccessful
    }
  }

  async createUser(user: any) {
    return await auth.post('/signup', user);
  }
}

const Auth = new AuthDataService();

export default Auth;