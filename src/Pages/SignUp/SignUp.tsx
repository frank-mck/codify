import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Auth from '../../services/AuthService'

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  const setInput = (setter: any) => (event: any) => {
    setter(event.currentTarget.value);
  }

  const addUser = async () => {
    await Auth.createUser({username: username, password: password, email: email})
  }

  const handleSignUp = (event: any) => {
    event.preventDefault();
    addUser();
    history.push('/');
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form className='sign-in-form' onSubmit={handleSignUp}>
        <label htmlFor='email' />Email
        <input
          required
          type='text'
          onChange={setInput(setEmail)}
          />
        <label htmlFor='username' />Username
        <input 
          required
          type ='text' 
          id='username' 
          onChange={setInput(setUsername)} 
        />
        <label htmlFor='password' />Password
        <input
          required 
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
          type ='password' 
          id ='password' 
          onChange={setInput(setPassword)}
         />
        <button type='submit'>Sign up</button>
      </form>   
    </div>
  )
}
