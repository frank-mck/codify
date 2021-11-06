import React from 'react';
import { useHistory } from 'react-router-dom';

export const LogOut = () => {

  const history: any = useHistory();

  const signOut = () => {
    localStorage.setItem('authToken', '');
    localStorage.setItem('tasksToken', '')
    localStorage.setItem('token', '')
    history.push('/')
  }

  return (
    <div>
      <button onClick={signOut}>Log Out</button>
    </div>
  )
}
