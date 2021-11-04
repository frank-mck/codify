import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Auth from '../../services/AuthService';
import bcrypt from 'bcryptjs';

export const SignUp: React.FC<any> = ({ setAuthMesgs }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<any>('');

  const history = useHistory();

  const setInput = (setter: any) => (event: any) => {
    setter(event.currentTarget.value);
  }

  const addUser = async () => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
      const {data}: any = await Auth.createUser({username, hashedPassword, email});
      localStorage.setItem('token', data.token);
      setAuthMesgs('User created successfuly!')
      history.push('/');
    } catch(err: any) {
      setError(err.response.data.error);
      setTimeout(() => { setError("") }, 4000);
    }
  }

  const handleSignUpForm = async (event: any) => {
    event.preventDefault();
    await addUser();
  }

  return (
    <div className='sign-up-container'>
      <h1>Sign Up</h1>
      <form className='sign-up-form' onSubmit={handleSignUpForm}>
        <label htmlFor='email' />Email
        <input
          required
          pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
          value={email}
          onChange={setInput(setEmail)}
          />
        <label htmlFor='username' />Username
        <input 
          required
          type ='text' 
          value={username}
          id='username' 
          onChange={setInput(setUsername)} 
        />
        <label htmlFor='password' />Password
        <input
          required 
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
          type ='password' 
          value={password}
          id ='password' 
          onChange={setInput(setPassword)}
         />
        <button type='submit'>Sign up</button>
      </form>   
      <p style={{color: 'red'}}>{error}</p>
    </div>
  )
}
