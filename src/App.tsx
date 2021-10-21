import React, {useState} from 'react';
import './styles/App.css';
import { AddTask } from './components/AddTask';
import { Tasks } from './components/Tasks';

const App: React.FC = () => {
  const [addTasks, setAddTasks] = useState<any>([]);

  return (
    <div className="App">
      <header><h1 data-testid='title'>Codify</h1></header>
      <AddTask setAddTasks={setAddTasks} />
      <Tasks setAddTasks={setAddTasks} addTasks={addTasks} />
    </div>
  );
} 

export default App;
