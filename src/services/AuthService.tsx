import http from './http';

class AuthDataService {
  url: string = '/auth'

  async createUser(user: any) {
    return await http.instance(this.url).post('/signup', user);
  }

  async loginUser(user: any) {
    const {data}: any = await http.instance(this.url).post('/signin', user);
    localStorage.setItem('authToken', data.token);
    return data
  }
}

const Auth = new AuthDataService();

export default Auth;