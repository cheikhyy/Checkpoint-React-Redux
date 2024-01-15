import React from 'react';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';


function App() {
  return (
    <div className="App" style={{textAlign:'center'}}>
     <h1 style={{marginTop:'3rem'}}>ToDo List</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
