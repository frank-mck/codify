import auth from './auth';

class AuthDataService {
  async uniqueUser(user: any) {
    const users = await auth.get('/users');
    const searchUser = users.data.find((person: any) => person.username === user.username || person.email === user.email);
    if (!searchUser) {
      return "User created successfully!"
    } else {
      return "Username or email already taken!"
    }
  }

  async createUser(user: any) {
    await auth.post('/signup', user);
  }
}

const Auth = new AuthDataService();

export default Auth;