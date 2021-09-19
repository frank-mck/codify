import React from 'react';
import { getPositionOfLineAndCharacter } from 'typescript';

export const AddTask: React.FC = () => {
  const [task, setTask] = React.useState<string>('');
  const [addTask, setAddTask] = React.useState<typeof task[] | []>([])

  const handleChange: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setAddTask([...addTask, task]);
    //setTask('')
  }

  const postTask = async (url = '', data = {}) => {
    const res = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json'},
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return res.json();
  }

  postTask('http://localhost:3002/api', { post: addTask})
  .then(data => {
    console.log(data)
  })

  return (
        <form data-testid="addTask-form" onSubmit={handleChange}>
          <input type='text' name ='task' placeholder='Enter a task...'
           value={task} onChange={(e) => setTask(e.target.value)}>
          </input>
          <button type ='submit' value ='Add'>Add</button>
        </form>
  )
}

