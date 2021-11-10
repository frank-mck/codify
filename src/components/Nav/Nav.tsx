import React from 'react';
import { LogOut } from '../LogOut';
import './Nav.css'

export const Nav: React.FC<any> = ({ setAuthMesgs, signedinUser, setSignedinUser }) => {
  return (
    <nav>
      <h1 className="nav-logo" >Codify</h1>
      {signedinUser && ( <div className="nav-rightside" >
        <p>{signedinUser}</p>
        <LogOut setAuthMesgs={setAuthMesgs} setSignedinUser={setSignedinUser} />       
      </div>
      )}
    </nav>
  )
}
