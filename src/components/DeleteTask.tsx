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

  const handleFadeout = () => {
    // Add a class name to the item being removed for a fade out effect
    const el: HTMLElement | any = document.getElementById(taskId);
    el.classList.add('fade-out-task');

    setTimeout(() => { 
      // Remove class name
      el.classList.remove('fade-out-task');
      const data = addTasks.filter((task: keyValuePair) => task._id !== taskId);
      setAddTasks([...data]);
    }, 300);
  }

  const deleteTask = async () => {
    try {
      await TaskDataService.deleteTask(taskId);
    } catch(err: any) {
      setAuthMesgs(err.response.data.error);
      history.push('/');
    }
    
    handleFadeout();
  }

  return (
    <IconButton aria-label="delete" onClick={() => deleteTask()}>
      <DeleteIcon 
        className='delete-btn'
        color="primary" 
        >Delete
      </DeleteIcon> 
    </IconButton>
  )
}
