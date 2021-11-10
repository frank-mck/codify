import React from 'react';
import { useHistory } from 'react-router-dom';
import { AuthEnums } from '../utils/AuthEnums';
import Button from '@mui/material/Button';

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
      <Button
        variant='outlined'
        size='small' 
        onClick={signOut}
        >Log Out
      </Button>
    </div>
  )
}
