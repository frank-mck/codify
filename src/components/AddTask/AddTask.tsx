import { useState, useEffect } from 'react';
import './AddTask.css';
import Button from '@mui/material/Button';
import TaskDataService from '../../services/TaskService';
import { useHistory } from 'react-router-dom';

export const AddTask: React.FC<any> = ({ setAddTasks, setAuthMesgs }) => {
  const [task, setTask] = useState<string>('');

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      getAllTasks().then(res => setAddTasks(res.data));
    }
  }, [setAddTasks]);

  const getAllTasks = async () => {
    return await TaskDataService.getAll();
  }

  const addTask: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const createTask = await TaskDataService.createTask({ task: task });  
      const getTasks = getAllTasks().then(tasks => setAddTasks(tasks.data));
      Promise.all([createTask, getTasks]);
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
          data-testid='add-task-form-btn'
          type ='submit'
          value ='Add'
          style={{margin: '15px', backgroundColor: 'rgb(0, 252, 201)', color: 'black'}}
         >Add</Button>
      </form>
    </div>
  )
}

