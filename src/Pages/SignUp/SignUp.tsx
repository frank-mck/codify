import React from 'react';
import { useHistory } from 'react-router-dom';

export const SignUp = () => {

  const history = useHistory();

  const handleSignUp = (event: any) => {
    event.preventDefault();
    history.push('/');
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form className='sign-in-form' onSubmit={handleSignUp}>
        <label htmlFor='email' />Email
        <input type='text' />
        <label htmlFor='username' />Username
        <input type ='text' id='username'></input> 
        <label htmlFor='password' />Password
        <input type ='password' id ='password'></input>
        <button type='submit'>Sign up</button>
      </form>   
    </div>
  )
}
