import React from 'react';
import { useHistory } from 'react-router-dom';

export const LogOut = () => {

  const history: any = useHistory();

  const signOut = () => {
    history.push('/')
  }

  return (
    <div>
      <button onClick={signOut}>Log Out</button>
    </div>
  )
}
