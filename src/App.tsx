import React, {useState} from 'react';
import './styles/App.css';
import { AddTask } from './components/AddTask';
import TaskDataService from './services/task';

const App: React.FC = () => {
  const [addTasks, setAddTasks] = useState<any>([]);
  const [edit, setEdit] = useState<any>('');
  const [edited, setEdited] = useState('')
  const [addId, setAddId] = useState('');

  const deleteTask = (id: any) => {
    TaskDataService.deleteTask(id);
    const data = addTasks.filter((n: any) => n._id !== id);
    setAddTasks([...data])
  }

  const editTask = async (data: any) => {
    const update = await TaskDataService.updateTask(addId, data);
    const getAll = await TaskDataService.getAll().then(res => setAddTasks(res.data))
    setEdit(false)
    Promise.all([update, getAll])
  }

  const formHandler = (e: any) => {
    e.preventDefault();
    setAddTasks([...addTasks])
  }

  const toggleEdit = (id: any, task: any) => {
    setEdit(id)
    setAddId(id)
  }

  return (
    <div className="App">
      <header><h1 data-testid='title'>Codify</h1></header>
      <AddTask setAddTasks={setAddTasks} />
      {addTasks.map((task: any, key: any) => {
         {if (edit == task._id) {
          return <form onSubmit={formHandler}>
          <input type='text' placeholder={task.task} onChange={(e) => setEdited(e.target.value)}></input>
          <button type='submit' onClickCapture={() => editTask({task: edited})}>Update</button>
        </form>
         } else {
           return <div key={key} id={task._id} className='task' style={{display: 'flex'}}><p>{task.task}</p> <button onClick={() => deleteTask(task._id)}>Del</button> <button onClick={() => toggleEdit(task._id, task)} >Edit</button></div>
         } } 
      })}

      
      
    </div>
  );
} 

export default App;
