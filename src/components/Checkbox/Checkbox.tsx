import React from 'react'
import './Checkbox.css'
import TaskDataService from '../../services/TaskService'

export const Checkbox: React.FC<any> = ({ setAddTasks, task, setCompletedTasks}) => {

  const setTaskDone = async (request: boolean, task: any) => {
    const taskComplete = await TaskDataService.completeTask(task._id, request);
    const getTasks = await TaskDataService.getAll()
    setAddTasks(getTasks.data);
    setCompletedTasks(getTasks.data[0].user.completedTasks)
    await Promise.all([taskComplete, getTasks])
  }

  return (
    <div className ='task-checkbox'>
    <form>
      {task.complete ? (
        <p className='checkbox-container'>
          <input className='checkbox' id={task._id} type ='checkbox' checked={task.complete} onChange={() => setTaskDone(false, task)}></input>
          <label htmlFor={task._id}></label>
        </p>
      ) : (
        <p className ='task-checkbox'>
          <input className='checkbox' id={task._id} type ='checkbox' checked={false} onChange={() => setTaskDone(true, task)}></input>
          <label htmlFor={task._id}></label>
        </p>
      )}
    </form>
   </div>
  )
}
