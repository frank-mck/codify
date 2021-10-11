import React from 'react';
import TaskDataService from '../services/task';

interface TaskProps {
  setAddTasks: any
  addTasks: ArrayConstructor[] | Array<string>
}

export const AddTask: React.FC<TaskProps> = ({ setAddTasks, addTasks }) => {
  const [tasks, setTasks] = React.useState<string>('');

  const handleChange: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setAddTasks([...addTasks, tasks])
    TaskDataService.createTask({ tasks: tasks})
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

