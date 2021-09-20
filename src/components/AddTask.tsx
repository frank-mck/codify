import React, { Dispatch, SetStateAction } from 'react';
import Axios from 'axios';

interface TaskProps {
  setAddTasks: Dispatch<SetStateAction<[] | ArrayConstructor[]>>
  addTasks: ArrayConstructor[] | Array<string>
}

export const AddTask: React.FC<any> = ({ setAddTasks, addTasks }) => {
  const [tasks, setTask] = React.useState<string>('');

  const handleChange: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setAddTasks([...addTasks, tasks])
    Axios.post('http://localhost:3002/v2/api/tasks', { tasks: tasks})
    setTask('')
  }

  return (
    <div>
      <form onSubmit={handleChange}>
        <input required type='text' name ='task' placeholder='Enter a task...'
          value={tasks} onChange={(e) => setTask(e.target.value)}>
        </input>
        <button type ='submit' value ='Add'>Add</button>
      </form>
    </div>
  )
}

