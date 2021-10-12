import React from 'react';
import './styles/App.css';
import { AddTask } from './components/AddTask';
import taskDataService from './services/task';

const App: React.FC = () => {
  const [addTasks, setAddTasks] = React.useState<any>([]);

  React.useEffect(() => {
    taskDataService.getAll().then(res => {
      setAddTasks(res.data)
    })
  }, []);

  const deleteTask = (id: any) => {
    taskDataService.deleteTask(id)
    .then(res => {
      setAddTasks(res.data) 
     });
  }

  return (
    <div className="App">
      <h1 data-testid='title'>Codify</h1>
      <AddTask setAddTasks={setAddTasks} addTasks={addTasks}/>
      {addTasks.map((task: any, key: any) => {
        return <li key={key}>{task.task} <button onClick={() => deleteTask(task._id)}>Delete</button></li>
      })}
    </div>
  );
}

export default App;
