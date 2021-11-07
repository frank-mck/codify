import jwt from 'jsonwebtoken';

const verifyToken = (): string | object => {
  const token: any = localStorage.getItem('authToken');
  const secret: any = process.env.REACT_APP_JWT_SECRET;
  try {
    return jwt.verify(token, secret);
  } catch(error) {
    return 'Not verified!'
  }
}

export default verifyToken();