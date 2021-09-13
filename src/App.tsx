import React from 'react';
import './styles/App.css';
import { AddTask } from './components/AddTask';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 data-testid='title'>Efficiency</h1>
      <AddTask />
    </div>
  );
}

export default App;
