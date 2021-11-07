import jwt from 'jsonwebtoken';

const verifyToken = (token: any): string | object => {
  const secret: any = process.env.REACT_APP_JWT_SECRET;
  try {
    return jwt.verify(token, secret);
  } catch(error) {
    return 'Not verified!'
  }
}

export default verifyToken;