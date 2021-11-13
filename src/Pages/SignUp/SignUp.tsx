import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Auth from '../../services/AuthService';
import { AuthEnums } from '../../utils/AuthEnums';
import Button from '@mui/material/Button';
import '../SignIn/SignIn.css';

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
    try {
      const {data}: any = await Auth.createUser({username, password, email});
      localStorage.setItem('token', data.token);
      setAuthMesgs(AuthEnums.successSignup);
      history.push('/');
    } catch(err: any) {
      setError(err.response.data.error);
      setTimeout(() => { setError("") }, 10000);
    }
  }

  const handleSignUpForm = async (event: any) => {
    event.preventDefault();
    await addUser();
  }

  return (
    <div className='signup-page'>
      <div className='sign-up-container'>
        <h1 className='signup-title'>Sign Up</h1>
        <form className='sign-up-form' onSubmit={handleSignUpForm}>
          <label htmlFor='email' />Email
          <input
            className='signup-input'
            required
            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
            value={email}
            onChange={setInput(setEmail)}
            />
          <label htmlFor='username' />Username
          <input 
            className='signup-input'
            required
            type ='text' 
            value={username}
            id='username' 
            onChange={setInput(setUsername)} 
          />
          <label htmlFor='password' />Password
          <input
            required 
            className='signup-input'
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
            type ='password'
            value={password}
            id ='password' 
            onChange={setInput(setPassword)}
          />
          <Button 
            style={{marginTop: '1rem', width: '7rem'}} 
            variant='contained' 
            type='submit'
          >Sign up</Button>
          <div className ='signin-link-container'>
            <p style={{fontSize: '.7rem', marginRight: '6px'}}>Already have an account?</p>
            <Link to='/' className='signin-link'>Sign in</Link>
          </div>
        </form>   
        <p className='auth-mesgs'>{error}</p>
      </div>
    </div>
  )
}
