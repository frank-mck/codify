import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Auth from '../../services/AuthService';
import { SignupMsg } from './SignupEnums'

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signupMsg, setSignupMsg] = useState<any>('');

  const history = useHistory();

  const signupMsgStyles = {
    color: signupMsg === SignupMsg.success ? 'green' : 'red',
  }

  const setInput = (setter: any) => (event: any) => {
    setter(event.currentTarget.value);
  }

  const addUser = async () => {
    await Auth.createUser({username: username, password: password, email: email});
  }

  const userLookup = async () => {
    // Will return a message depending if a user already exists
    return await Auth.searchUser({
      username: username,
      password: password,
      email: email
    });
  }

  const handleSignupMsg = async () => {
    const mesg = await userLookup();
    setSignupMsg(mesg);
    if (mesg === SignupMsg.success) history.push('/')
  }

  const handleSignUpForm = async (event: any) => {
    event.preventDefault();
    const msgHandler = await handleSignupMsg();
    const registerUser = await addUser();
    Promise.all([msgHandler, registerUser]);
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
        <p style={signupMsgStyles}>{signupMsg}</p>
      </form>   
      
    </div>
  )
}
