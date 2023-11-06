1. **JSX 문법**이란 무엇일까요?

  Javascript와 XML이 합쳐진 문법이다.

2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이들과 같은 **애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요**?

  useState

3. 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?

  props를 사용하여 공유하였습니다.

4. 기능 구현을 위해 **불변성 유지가** 필요한 부분이 있었다면 하나만 설명해 주세요.

  할일 완료, 취소, 삭제를 할 때 불변성 유지를 하지않고 하니 기능이 내가 원하는 대로 작동하지 않았지만, 새로운 객체를 생성해주어 불변성 유지를 하니 기능이 잘 작동하였다.

5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?** 그렇다면 **어떠한 이점이 있었나요?**

  분리하기 전에는 코드가 길어서 코드를 찾는데에 헤매고 다른 코드로 착각했는데 분리를 해서 하나로 재사용해서 쓰니 찾는 코드를 바로 바로 찾을 수 있어서 편리해졌습니다.

##### 분리한 컴포넌트

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
