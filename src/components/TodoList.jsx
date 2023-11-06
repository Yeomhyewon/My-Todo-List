import React from "react";
import "../App.jsx";

function TodoList(props) {
  const { title, content, todoList, firstBtn, secondBtn } = props;
  // console.log(props);
  return (
    <div className="todoCard">
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className="firstSecondBtn">
        <button
          className="firstBtn"
          onClick={() => {
            props.firstBtnHandler(todoList.id);
          }}
        >
          {firstBtn}
        </button>
        <button
          className="secondBtn"
          onClick={() => {
            props.secondBtnHandler(todoList);
          }}
        >
          {secondBtn}
        </button>
      </div>
    </div>
  );
}

export default TodoList;
