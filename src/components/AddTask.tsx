import React from 'react';

export const AddTask: React.FC = () => {
  const [task, setTask] = React.useState<string>('');
  const [addTask, setAddTask] = React.useState<typeof task[] | []>([])

  const handleChange: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setAddTask([...addTask, task]);
    setTask('')
  }


  return (
        <form data-testid="addTask-form" onSubmit={handleChange}>
          <input type='text' name ='task' placeholder='Enter a task...'
           value={task} onChange={(e) => setTask(e.target.value)}>
          </input>
          <button type ='submit' value ='Add'>Add</button>
        </form>
  )
}

