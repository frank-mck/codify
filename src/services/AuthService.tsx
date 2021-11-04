import auth from './auth';

class AuthDataService {
  async createUser(user: any) {
    return await auth.post('/signup', user);
  }
}

const Auth = new AuthDataService();

export default Auth;