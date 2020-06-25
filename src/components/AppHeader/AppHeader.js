import React from "react";
import './AppHeader.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="AppHeader d-flex">
      <h1>React Todo List</h1>
      <h2>{toDo} осталось выполнить. Выполнено {done} </h2>
    </div>
  )
}

export default AppHeader;