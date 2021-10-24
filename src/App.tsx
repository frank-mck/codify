import React, {useState} from 'react';
import './styles/App.css';
import { AddTask } from './components/AddTask/AddTask';
import { Tasks } from './components/Tasks/Tasks';
import { Nav } from './components/Nav/Nav';

const App: React.FC = () => {
  const [addTasks, setAddTasks] = useState<any>([]);

  return (
    <div className="App">
      <Nav />
      <AddTask setAddTasks={setAddTasks} />
      <Tasks setAddTasks={setAddTasks} addTasks={addTasks} />
    </div>
  );
} 

export default App;
