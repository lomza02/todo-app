import React from 'react';
import './App.css';
import TodoList from './app/todos/containers/TodoList';
import ListForm from './app/todos/containers/ListForm';
import Filters from './app/filter/containers/Filters';


function App() {

  return (
    <div className="App">
      <h1>Twoje zadania</h1>
      <ListForm />
      <TodoList />
      <Filters />
    </div>
  );
}

export default App;
