import http from "../utils/http";
import verifyToken from "../utils/verifyToken";

class AuthDataService {
  url: string = "/auth";

  async createUser(user: any) {
    return await http.instance(this.url).post("/signup", user);
  }

  async loginUser(user: any) {
    const { data }: any = await http.instance(this.url).post("/signin", user);
    localStorage.setItem("authToken", data.token);
    const verification = verifyToken(data.token);
    return verification;
  }
}

const Auth = new AuthDataService();

export default Auth;
