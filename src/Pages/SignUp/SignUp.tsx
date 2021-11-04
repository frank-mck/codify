import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Auth from '../../services/AuthService';
import { SignupMsg } from './SignupEnums'

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<any>('h');

  const history = useHistory();

  const signupMsgStyles = {
    color: 'red',
  }

  const setInput = (setter: any) => (event: any) => {
    setter(event.currentTarget.value);
  }

  const addUser = async () => {
    try {
      const {data}: any = await Auth.createUser({username, password, email});
      localStorage.setItem('token', data.token);
      //history.push('/')
    } catch(err: any) {
      setError(err.response.data.error)
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
        <p style={signupMsgStyles}>{error}</p>
      </form>   
      
    </div>
  )
}
