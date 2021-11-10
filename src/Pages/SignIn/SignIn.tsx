import { useState } from 'react';
import './SignIn.css';
import { useHistory } from 'react-router-dom';
import Auth from '../../services/AuthService'
import { AuthEnums } from '../../utils/AuthEnums';
import Button from '@mui/material/Button';

export const SignIn: React.FC<any> = ({ authMesgs, setAuthMesgs }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authMsgStyles: any = {
    color: (authMesgs === AuthEnums.successSignup && 'green') || (authMesgs === AuthEnums.signout && 'green') ||
    (authMesgs === AuthEnums.invalidCredentials && 'red') || (authMesgs === AuthEnums.unorthorized && 'red')
  }

  const history = useHistory();

  const setInput = (setter: any) => (event: any) => {
    setter(event.currentTarget.value);
  }

  const logIn = async (event: any) => {
    event.preventDefault();
    try { 
      await Auth.loginUser({username: username, password: password});
      history.push('/tasks');
    } catch (err: any) {
      setAuthMesgs(err.response.data.error);
    }
  }

  const signUp = (event: any) => {
    event.preventDefault();
    history.push('/signup');
  }

  return (
    <div className='signin-page'>
      <div className ='signin-headline-background'>
        <h2 className='signin-headline'>
          Sort, organize and keep track of your most important tasks.
        </h2>
      </div>
      <div className ='sign-in-container'>
        <h1 className='signin-title'>Sign in</h1>
        <form className='sign-in-form' onSubmit={logIn}>
          <label htmlFor='username' />Username
          <input 
            className='signin-input'
            type ='text' 
            required
            id='username' 
            onChange={setInput(setUsername)}
          ></input> 
          <label htmlFor='password' />Password
          <input 
            className='signin-input'
            type ='password' 
            required
            id ='password' 
            onChange={setInput(setPassword)}
          ></input>
          <Button style={{marginTop: '1rem', width: '7rem'}} variant='contained' type='submit'>Sign in</Button>
          <Button style={{marginTop: '4px', width: '7rem'}} variant='outlined' onClick={signUp}>Sign up</Button>
        </form>    
        <p style={authMsgStyles}>{authMesgs}</p>  
      </div>
    </div>
  )
}
