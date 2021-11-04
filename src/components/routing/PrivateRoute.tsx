import React from 'react'
import {Redirect, Route, useHistory } from 'react-router-dom';

export const PrivateRoute: React.FC<any> = ({ comp: Component, ...rest }) => {

  const history = useHistory();
  return (
    <Route 
      {...rest}
      render={(props: any) => {
          localStorage.getItem("authTken") ? (
            <Component {...props} />
          ) : (
            history.push('/')
          )        
        }
      }
    />
  )
}

export default PrivateRoute;