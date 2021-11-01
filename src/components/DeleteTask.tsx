import TaskDataService from '../services/TaskService';
import React from 'react';
import Button from '@mui/material/Button';

export const DeleteTask: React.FC<any> = ({ addTasks, setAddTasks, taskId }) => {

  interface keyValuePair {
    _id: string, 
    task: string,
  }

  const deleteTask = async () => {
    await TaskDataService.deleteTask(taskId);
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
