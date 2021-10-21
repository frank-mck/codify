import React, {useState} from 'react';
import './styles/App.css';
import { AddTask } from './components/AddTask';
import TaskDataService from './services/task';

const App: React.FC = () => {
  const [addTasks, setAddTasks] = useState<any>([]);
  const [edit, setEdit] = useState<any>('');
  const [update, setUpdate] = useState<any>('')

  const deleteTask = (id: any) => {
    TaskDataService.deleteTask(id);
    const data = addTasks.filter((n: any) => n._id !== id);
    setAddTasks([...data])
  }

  const editTask = async (data: any) => {
    const updated = await TaskDataService.updateTask(update, data);
    const getAll = await TaskDataService.getAll().then(res => setAddTasks(res.data))
    Promise.all([updated, getAll])
  }

  const formHandler = (e: any) => {
    e.preventDefault();
    setUpdate('');
    setEdit('')
    setAddTasks([...addTasks])
  }

  const toggleEdit = (id: any, task: any) => {
    setUpdate(id);
    setEdit(task);
  }

  return (
    <div className="App">
      <header><h1 data-testid='title'>Codify</h1></header>
      <AddTask setAddTasks={setAddTasks} />
      {addTasks.map((task: any, key: any) => {
        // returns an edit form if the user clicks on an edit button
        if (update === task._id) {
          return <form key={key} onSubmit={formHandler}>
          <input 
            type='text' 
            placeholder={task.task}
            onChange={(e) => setEdit(e.target.value) }>
          </input>
          <button 
            type='submit'
            onClickCapture={() => editTask({task: edit})}>
            Update
          </button>
        </form>
        } else {
          return <div key={key} id={task._id} className='task' style={{display: 'flex'}}>
          <p>{task.task}</p> 
          <button onClick={() => deleteTask(task._id)}>Del</button> 
          <button onClick={() => toggleEdit(task._id, task.task)}>Edit</button>
        </div>
        }
      })}
    </div>
  );
} 

export default App;
