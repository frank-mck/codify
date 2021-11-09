import React from 'react';
import { useHistory } from 'react-router-dom';
import { AuthEnums } from '../utils/AuthEnums';

export const LogOut: React.FC<any> = ({ setAuthMesgs, setSignedinUser }) => {

  const history: any = useHistory();

  const signOut = () => {
    if (localStorage.getItem('authToken')) setAuthMesgs(AuthEnums.signout);
    setSignedinUser('')
    localStorage.setItem('authToken', '');
    localStorage.setItem('tasksToken', '')
    localStorage.setItem('token', '');
    history.push('/')
  }

  return (
    <div>
      <button onClick={signOut}>Log Out</button>
    </div>
  )
}
