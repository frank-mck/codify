import { useState } from 'react';
import './SignIn.css';
import { useHistory } from 'react-router-dom';
import Auth from '../../services/AuthService'

export const SignIn: React.FC<any> = ({ authMesgs, setAuthMesgs }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authMsgStyles: any = {
    color: authMesgs === "Invalid username or password!" ? 'red' : 'green'
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
      window.location.reload();
    } catch (err: any) {
      setAuthMesgs(err.response.data.error)
    }
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
        <input 
          type ='text' 
          required
          id='username' 
          onChange={setInput(setUsername)}
        ></input> 
        <label htmlFor='password' />Password
        <input 
          type ='password' 
          required
          id ='password' 
          onChange={setInput(setPassword)}
        ></input>
        <button type='submit'>Sign in</button>
        <button onClick={signUp}>Sign up</button>
      </form>    
      <p style={authMsgStyles}>{authMesgs}</p>  
    </div>
  )
}
