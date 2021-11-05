import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute: React.FC<any> = ({ component: Component, setAddTasks, addTasks, ...rest }) => {

  return (
    <Route 
      {...rest}
      render={(props: any) => {
          localStorage.getItem("authToken") ? (
            <Component {...props} setAddTasks={setAddTasks} addTasks={addTasks} />
          ) : (
            <Redirect to='/' />
          )        
        }
      }
    />
  )
}

export default PrivateRoute;