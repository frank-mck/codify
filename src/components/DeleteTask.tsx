import TaskDataService from '../services/TaskService';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

export const DeleteTask: React.FC<any> = ({ addTasks, setAddTasks, taskId, setAuthMesgs }) => {

  interface keyValuePair {
    _id: string, 
    task: string,
  }

  const history = useHistory();

  const deleteTask = async () => {
    try {
      await TaskDataService.deleteTask(taskId);
    } catch(err: any) {
      setAuthMesgs(err.response.data.error);
      history.push('/');
    }
    const el: any = document.getElementById(taskId);
    el.classList.add('fade-out-task');
    setTimeout(() => { 
      el.classList.remove('fade-out-task')
      const data = addTasks.filter((task: keyValuePair) => task._id !== taskId);
      setAddTasks([...data]);
    }, 300)
   
  }

  return (
    <IconButton aria-label="delete" onClick={() => deleteTask()}>
      <DeleteIcon 
        className='delete-btn'
        color="error" 
      >Delete</DeleteIcon> 
    </IconButton>
  )
}
