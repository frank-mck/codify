import React from 'react';
import './styles/App.css';
import { AddTask } from './components/AddTask';
import Axios from 'axios';

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState <typeof Object[] | []>([]);

  React.useEffect(() => {
    Axios.get('http://localhost:3002/tasks').then(res => {
      setTasks(res.data.map((n: { task: object; }) => n.task))
      console.log(res.data)
    })
  }, [])

  return (
    <div className="App">
      <h1 data-testid='title'>Codify</h1>
      <AddTask />
      {tasks.map((task, key) => {
        return <li key={key}>{task}</li>
      })}
    </div>
  );
}

export default App;
