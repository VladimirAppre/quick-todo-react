import React from "react";
import './AppHeader.css';


const AppHeader = ({toDo, done}) => {

  function caseCondition () {
    if(toDo === 0 && done === 0 ) {
      return `Совсем все пусто, давай добавим задач`;
    } else if (toDo === 0 && done !== 0){
      return `Пора накинть новых задач, 
      а выполненных задач ${done}`;
    } else if (toDo !== 0 && done === 0) {
      return `У вас ${toDo} активных задач,
             а выполненных задач нет`;
    } else {
      return `Осталось выполнить ${toDo}, а всего выполнено ${done}`;
    };
  };

  return (
    <div className="AppHeader d-flex">
      <h1>React Todo List</h1>
      <h2>{caseCondition()}</h2>
    </div>
  );
};

export default AppHeader;