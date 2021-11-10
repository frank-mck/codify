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
    const data = addTasks.filter((task: keyValuePair) => task._id !== taskId);
    setAddTasks([...data]);
  }

  return (
    <IconButton aria-label="delete">
      <DeleteIcon 
        className='delete-btn'
        color="error" 
        onClick={() => deleteTask()}
      >Delete</DeleteIcon> 
    </IconButton>
  )
}
