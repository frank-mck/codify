import React from 'react';
import './styles/App.css';
import { AddTask } from './components/AddTask';
import taskDataService from './services/task';

const App: React.FC = () => {
  const [addTasks, setAddTasks] = React.useState <typeof Array[] | []>([]);

  React.useEffect(() => {
    taskDataService.getAll().then(res => {
      setAddTasks(res.data.map((n: { task: object; }) => n.task))
      console.log(res.data)
    })
  }, [])

  return (
    <div className="App">
      <h1 data-testid='title'>Codify</h1>
      <AddTask setAddTasks={setAddTasks} addTasks={addTasks}/>
      {addTasks.map((task, key) => {
        return <li key={key}>{task}</li>
      })}
    </div>
  );
}

export default App;
