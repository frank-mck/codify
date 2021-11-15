import { useState, useEffect } from 'react';
import './AddTask.css';
import Button from '@mui/material/Button';
import TaskDataService from '../../services/TaskService';
import { useHistory } from 'react-router-dom';

export const AddTask: React.FC<any> = ({ setAddTasks, setAuthMesgs, setSignedinUser }) => {
  const [task, setTask] = useState<string>('');

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      const getAllTasks = async () => {
        const tasks = await TaskDataService.getAll();
        await setSignedinUser(tasks.data[0].user.username);
        tasks.data[0].task && await setAddTasks(tasks.data);
      }
      getAllTasks();
    } else {
      history.push('/');
    }
  }, [setAddTasks, setSignedinUser, history]);

  

  const addTask: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const createTask = await TaskDataService.createTask({ task: task });  
      const tasks = await TaskDataService.getAll(); 
      setAddTasks(tasks.data);
      Promise.all([createTask, tasks]);
      setTask('');
    } catch (err: any) {
      setAuthMesgs(err.response.data.error);
      history.push('/');
    }
  }

  return (
    <div className='add-task-container'>
      <form data-testid='add-task-form' className="task-form" onSubmit={addTask}>
        <input
          className='task-form-input'
          data-testid='task-form-input'
          required type='text'
          name ='task' placeholder='Enter a task...'
          value={task} 
          onChange={(e) => setTask(e.target.value)}>
        </input>
        <Button
          variant="contained"
          className='add-task-form-btn'
          data-testid='add-task-form-btn'
          type ='submit'
          value ='Add'
          style={{color: 'rgb(216, 216, 216)', backgroundColor: '#1d4774', marginLeft: '1rem'}}
         >Add</Button>
      </form>
      <div className='tasks-completed'>
        <div className='star-container'><img className ='star' alt='star' src ='https://cdn-icons-png.flaticon.com/512/1828/1828970.png' /><p>0</p></div>
        
        <Button style={{color: 'white', fontSize: '.8rem'}} size='small' variant='outlined'>Favourites</Button>
      </div>
    </div>
  )
}

