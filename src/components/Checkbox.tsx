import React from 'react'
import TaskDataService from '../services/TaskService'

export const Checkbox: React.FC<any> = ({ setAddTasks, task}) => {

  const setTaskDone = async (request: boolean, task: any) => {
    await TaskDataService.completeTask(task._id, request);
    TaskDataService.getAll().then(res => setAddTasks(res.data));
  }

  return (
    <div className ='task-checkbox'>
    <form>
      {task.complete ? (
        <input type ='checkbox' checked={task.complete} onChange={() => setTaskDone(false, task)}></input>
      ) : (
        <input type ='checkbox' checked={task.complete} onChange={() => setTaskDone(true, task)}></input>
      )}
    </form>
   </div>
  )
}
