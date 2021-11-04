import auth from './httpAuth';

class AuthDataService {
  async createUser(user: any) {
    return await auth.post('/signup', user);
  }

  async loginUser(user: any) {
    return await auth.post('/signin', user);
  }
}

const Auth = new AuthDataService();

export default Auth;