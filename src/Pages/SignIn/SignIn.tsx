import { useState } from 'react';
import './SignIn.css';
import { useHistory } from 'react-router-dom';
import Auth from '../../services/AuthService'

export const SignIn: React.FC<any> = ({ authMesgs, setAuthMesgs }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const setInput = (setter: any) => (event: any) => {
    setter(event.currentTarget.value);
  }

  const logIn = async (event: any) => {
    event.preventDefault();
    try { 
      const {data} = await Auth.loginUser({username: username, password: password});
      history.push('/tasks');
      localStorage.setItem('authToken', data.token)
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
        <input type ='text' id='username' onChange={setInput(setUsername)}></input> 
        <label htmlFor='password' />Password
        <input type ='password' id ='password' onChange={setInput(setPassword)}></input>
        <button type='submit'>Sign in</button>
        <button onClick={signUp}>Sign up</button>
      </form>    
      <p style={{color: 'green'}}>{authMesgs}</p>  
    </div>
  )
}
