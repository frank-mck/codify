import React from 'react';
import Axios from 'axios';

export const AddTask: React.FC = () => {
  const [task, setTask] = React.useState<string>('');

  const handleChange: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3002/v2/api/tasks', { tasks: task})
    setTask('')
  }

  return (
    <div>
      <form onSubmit={handleChange}>
        <input required type='text' name ='task' placeholder='Enter a task...'
          value={task} onChange={(e) => setTask(e.target.value)}>
        </input>
        <button type ='submit' value ='Add'>Add</button>
      </form>
    </div>
  )
}

