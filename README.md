### 분리한 컴포넌트

```import React from "react";
import "../App.jsx";

function TodoList(props) {
  const { title, content, key, todoList, firstBtn, secondBtn } = props;

  return (
    <div className="todoCard">
      <div key={key}>
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
```
