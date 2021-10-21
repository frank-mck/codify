import React from 'react';
import TaskDataService from '../services/task';

export const AddTask: React.FC<any> = ({ setAddTasks }) => {
  const [task, setTask] = React.useState<string>('');

  React.useEffect(() => {
    getAllTasks().then(res => setAddTasks(res.data));
  }, [setAddTasks]);

  const getAllTasks = async () => {
    return await TaskDataService.getAll();
  }

  const addTask: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    TaskDataService.createTask({ tasks: task });  
    getAllTasks().then(res => setAddTasks(res.data)).catch(error => console.log(error));
    setTask('');
  }

  return (
    <div>
      <form className="task-form" onSubmit={addTask}>
        <input required type='text' name ='task' placeholder='Enter a task...'
          value={task} onChange={(e) => setTask(e.target.value)}>
        </input>
        <button type ='submit' value ='Add'>Add</button>
      </form>
    </div>
  )
}

