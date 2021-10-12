import React from 'react';
import TaskDataService from '../services/task';

interface TaskProps {
  setAddTasks: any
}

export const AddTask: React.FC<TaskProps> = ({ setAddTasks }) => {
  const [tasks, setTasks] = React.useState<string>('');

  const getAllTasks = async () => {
    return await TaskDataService.getAll()
    .then(res => res.data)
    .catch(error => console.log(error))
  }

  React.useEffect(() => {
    getAllTasks().then(res => setAddTasks(res))
  }, [setAddTasks]);


  const handleChange: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    TaskDataService.createTask({ tasks: tasks});
    getAllTasks().then(res => setAddTasks(res));
    setTasks('');
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

