import React from 'react';
import Axios from 'axios';

// interface TaskProps {
//   setAddTasks: Dispatch<SetStateAction<[] | ArrayConstructor[]>>
//   addTasks: ArrayConstructor[] | Array<string>
// }

export const AddTask: React.FC<any> = ({ setAddTasks, addTasks }) => {
  const [tasks, setTasks] = React.useState<string>('');

  const handleChange: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setAddTasks([...addTasks, tasks])
    Axios.post('http://localhost:3002/v2/api/tasks', { tasks: tasks})
    setTasks('')
  }

  return (
    <div>
      <form className="task-form" onSubmit={handleChange}>
        <input required type='text' name ='task' placeholder='Enter a task...'
          value={tasks} onChange={(e) => setTasks(e.target.value)}>
        </input>
        <button type ='submit' value ='Add'>Add</button>
      </form>
    </div>
  )
}

