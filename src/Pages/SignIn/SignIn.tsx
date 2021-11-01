import React from 'react';
import './SignIn.css';
import { useHistory } from 'react-router-dom';

export const SignIn = () => {

  const history = useHistory();

  const logIn = (event: any) => {
    event.preventDefault();
    history.push('/tasks')
  }

  const signUp = (event: any) => {
    event.preventDefault();
    history.push('/signup');
  }

  return (
    <div className ='sign-in-container'>
      <h1>Sign in</h1>
      <form className='sign-in-form' onSubmit={logIn}>
        <label htmlFor='username' />Username
        <input type ='text' id='username'></input> 
        <label htmlFor='password' />Password
        <input type ='password' id ='password'></input>
        <button type='submit'>Sign in</button>
        <button onClick={signUp}>Sign up</button>
      </form>      
    </div>
  )
}
