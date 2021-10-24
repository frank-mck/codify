import React, { useState } from 'react'
import TaskDataService from '../../services/task';
import { DeleteTask } from '../DeleteTask';
import './Tasks.css'
import '../AddTask/AddTask.css'

interface keyValuePair {
  _id: string, 
  task: string,
}

export const Tasks: React.FC<any> = ({ setAddTasks, addTasks }) => {
  const [update, setUpdate] = useState<keyValuePair>({_id: '', task: ''});

  const editTask = async (task: {task: string}) => {
    const updated = await TaskDataService.updateTask(update._id, task);
    const getAll = await TaskDataService.getAll().then(res => setAddTasks(res.data));
    Promise.all([updated, getAll])
  }

  const formHandler = (e: any) => {
    e.preventDefault();
    setUpdate({_id: '', task: ''});
    setAddTasks([...addTasks]);
  }

  const toggleUpdate = (id: string, task: string) => {
    setUpdate({_id: id, task: task});
  }

  return (
    <div className ='tasks-container'>
      {addTasks.map((task: keyValuePair, key: number) => {
        // returns an edit form if the user clicks on an edit button
        if (update._id === task._id) {
          return (
          <form className='edit-task-form' key={key} onSubmit={formHandler}>
            <input 
              className='edit-task-input'
              type='text' 
              placeholder={task.task}
              onChange={(e) => setUpdate({_id: task._id, task: e.target.value})}>
            </input>
            <button 
              className='task-btn'
              type='submit'
              onClickCapture={() => editTask({task: update.task})}>
              Update
            </button>
          </form> )
        } else {
          return (
          <div key={key} id={task._id} className='task'>
            <p>{task.task}</p> 
            <div className='task-buttons'>
            <DeleteTask 
              addTasks={addTasks} 
              setAddTasks={setAddTasks} 
              taskId={task._id} 
            />
            <button onClick={() => toggleUpdate(task._id, task.task)} className='edit-task task-btn'>Edit</button>
            </div>
          </div>)
        }
      })}
    </div>
  )
}
