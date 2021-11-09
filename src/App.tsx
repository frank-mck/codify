import React, { useState } from 'react';
import './styles/App.css';
import { Tasks } from './Pages/Tasks/Tasks';
import { Nav } from './components/Nav/Nav';
import { SignIn } from './Pages/SignIn/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignUp } from './Pages/SignUp/SignUp';
import { AuthEnums } from './utils/AuthEnums';

const App: React.FC = () => {
  const [addTasks, setAddTasks] = useState<any>([]);
  const [authMesgs, setAuthMesgs] = useState<any>("");
  const [signedinUser, setSignedinUser] = useState<string>('');

  setTimeout(() => { setAuthMesgs("") }, 10000);

  if (authMesgs === AuthEnums.unorthorized) {
    localStorage.setItem('authToken', '');
    localStorage.setItem('token', '');
  }

  return (
    <Router>
      <div className="App">
        <Nav setAuthMesgs={setAuthMesgs} signedinUser={signedinUser} setSignedinUser={setSignedinUser} />
        <Switch>
          <Route path ='/' exact >
            <SignIn authMesgs={authMesgs} setAuthMesgs={setAuthMesgs} />
          </Route>
          <Route path='/signup' exact >
            <SignUp setAuthMesgs={setAuthMesgs} />
          </Route>
          <Route path='/tasks' >
            <Tasks setAddTasks={setAddTasks} addTasks={addTasks} setAuthMesgs={setAuthMesgs} setSignedinUser={setSignedinUser} />   
          </Route>       
        </Switch>
      </div>
    </Router>
  );
} 

export default App;
