import React from 'react';
import { useHistory } from 'react-router-dom';

export const LogOut: React.FC<any> = ({ setAuthMesgs }) => {

  const history: any = useHistory();

  const signOut = () => {
    if (localStorage.getItem('authToken')) setAuthMesgs('Successfully sign out!')
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
