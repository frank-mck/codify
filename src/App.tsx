import React, {useState} from 'react';
import './styles/App.css';
import { Tasks } from './Pages/Tasks/Tasks';
import { Nav } from './components/Nav/Nav';
import { SignIn } from './Pages/SignIn/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignUp } from './Pages/SignUp/SignUp';
import PrivateRoute from './components/routing/PrivateRoute';


const App: React.FC = () => {
  const [addTasks, setAddTasks] = useState<any>([]);
  const [authMesgs, setAuthMesgs] = useState<any>("");

  setTimeout(() => { setAuthMesgs("") }, 4000);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path ='/' exact >
            <SignIn authMesgs={authMesgs} setAuthMesgs={setAuthMesgs} />
          </Route>
          <Route path='/signup' exact >
            <SignUp setAuthMesgs={setAuthMesgs} />
          </Route>
          <Route exact path='/tasks' >
            <Tasks setAddTasks={setAddTasks} addTasks={addTasks} /> 
          </Route>
           
        </Switch>
      </div>
    </Router>
  );
} 

export default App;
