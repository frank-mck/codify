import React from 'react';
import TaskDataService from '../services/task';

export const DeleteTask: React.FC<any> = ({ addTasks, setAddTasks, taskId }) => {

  const deleteTask = () => {
    TaskDataService.deleteTask(taskId);
    const data = addTasks.filter((n: any) => n._id !== taskId);
    setAddTasks([...data])
  }

  return (
    <button onClick={() => deleteTask()}>Delete</button> 
  )
}
