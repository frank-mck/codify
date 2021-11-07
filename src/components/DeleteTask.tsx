import TaskDataService from '../services/TaskService';
import React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

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
    setAddTasks([...data])
  }

  return (
    <Button 
      variant="contained" 
      color="error" 
      onClick={() => deleteTask()}
      style={{margin: '10px'}}
    >Delete</Button> 
  )
}
