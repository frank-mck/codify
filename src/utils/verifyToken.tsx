import jwt from "jsonwebtoken";

const verifyToken = (token: any): object | any => {
  const secret: any = process.env.REACT_APP_JWT_SECRET;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return false;
  }
};

export default verifyToken;
