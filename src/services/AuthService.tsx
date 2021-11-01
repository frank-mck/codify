import auth from './auth';

class AuthDataService {
  async createUser(user: any) {
    await auth.post('/signup', user)
  }
}

const Auth = new AuthDataService();

export default Auth;