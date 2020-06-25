import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import TodoList from "../TodoList/TodoList";
import React from "react";
import './App.css';

const App = () => {
  const todoData = [
    {label: 'Выпить кофе', important: false, id: 1},
    {label: 'Показать структуру приложения', important: true, id: 2},
    {label: 'пойти на перерыв', important: false, id: 3},
  ]
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList todos={todoData}/>
    </div>
  )
}

export default App;