import React, { useEffect } from 'react';
import './styles/App.css';
import { AddTask } from './components/AddTask';
import TaskDataService from './services/task';

const App: React.FC = () => {
  const [addTasks, setAddTasks] = React.useState<any>([]);

  const deleteTask = (id: any) => {
    TaskDataService.deleteTask(id);
    const data = addTasks.filter((n: any) => n._id !== id);
    setAddTasks([...data])
  }

  const editTask = (id: any) => {
    TaskDataService.getById(id);
  }

  return (
    <div className="App">
      <header><h1 data-testid='title'>Codify</h1></header>
      <AddTask setAddTasks={setAddTasks} />
      {addTasks.reverse().map((task: any, key: any) => {
        return <li key={key}>
          {task.task} <button onClick={() => deleteTask(task._id)}>Delete</button> <button onClick={() => editTask(task._id)}>O</button></li>
      })}
    </div>
  );
} 

export default App;
