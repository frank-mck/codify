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

  const addTask: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const createTask = await TaskDataService.createTask({ tasks: task });  
    const getTasks = await getAllTasks().then(res => setAddTasks(res.data));
    Promise.all([createTask, getTasks]);
    setTask('');
  }

  return (
    <div>
      <form className="task-form" onSubmit={addTask}>
        <input 
          required type='text'
          name ='task' placeholder='Enter a task...'
          value={task} 
          onChange={(e) => setTask(e.target.value)}>
        </input>
        <button type ='submit' value ='Add'>Add</button>
      </form>
    </div>
  )
}

