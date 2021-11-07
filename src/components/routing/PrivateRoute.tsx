import React from 'react'
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute: React.FC<any> = ({ component: Component, setAddTasks, addTasks, ...rest }) => {
  
  return  (
    <Route {...rest} 
      render={(props: any) => (
        localStorage.getItem('authToken') ? 
          <Component {...props} setAddTasks={setAddTasks} addTasks={addTasks} />
         : (
          <Redirect to='/' />
        )        
      )}
    />
  )
}
