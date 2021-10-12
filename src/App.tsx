import React from 'react';
import './styles/App.css';
import { AddTask } from './components/AddTask';
import taskDataService from './services/task';

const App: React.FC = () => {
  const [addTasks, setAddTasks] = React.useState<any>([]);

  const deleteTask = (id: any) => {
    taskDataService.deleteTask(id);
    const data = addTasks.filter((n: any) => n._id !== id);
    setAddTasks([...data])
  }

  return (
    <div className="App">
      <h1 data-testid='title'>Codify</h1>
      <AddTask setAddTasks={setAddTasks} />
      {addTasks.map((task: any, key: any) => {
        return <li key={key}>{task.task || task} <button type ='reset' onClick={() => deleteTask(task._id || task)}>Delete</button></li>
      })}
    </div>
  );
}

export default App;
