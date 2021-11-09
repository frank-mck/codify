import React from 'react';
import { LogOut } from '../LogOut';
import './Nav.css'

export const Nav: React.FC<any> = ({ setAuthMesgs, signedinUser }) => {
  return (
    <nav>
      <h1>Codify</h1>
      <LogOut setAuthMesgs={setAuthMesgs} />
      <p>Hello {signedinUser}</p>
    </nav>
  )
}
