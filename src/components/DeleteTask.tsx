import React from 'react';
import TaskDataService from '../services/task';

export const DeleteTask: React.FC<any> = ({ addTasks, setAddTasks, taskId }) => {

  interface keyValuePair {
    _id: string, 
    task: string,
  }

  const deleteTask = () => {
    TaskDataService.deleteTask(taskId);
    const data = addTasks.filter((task: keyValuePair) => task._id !== taskId);
    setAddTasks([...data])
  }

  return (
    <button onClick={() => deleteTask()}>Delete</button> 
  )
}
