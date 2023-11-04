import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 제목, 내용 onChange
  const onChangeTitle = function (event) {
    return setTitle(event.target.value);
  };
  const onChangeContent = function (event) {
    return setContent(event.target.value);
  };

  // todo list 추가하기
  const [todoList, setTodoList] = useState([
    {
      id: Date.now(),
      title: "test",
      content: "리액트 기초 공부해봅시다",
      isDone: false,
    },
  ]);

  const clickTodoListAddHandler = () => {
    const newTodoLIst = {
      id: Date.now(),
      title,
      content: content,
    };
    if (title === "" || content === "") {
      alert("제목 또는 내용을 입력해주세요.");
      return false;
    }
    setTodoList([...todoList, newTodoLIst]);
    setTitle("");
    setContent("");
  };

  // 완료카드? 완료된 카드가 보이도록 state를 하나 더 만들어줌
  const [doneList, setDoneList] = useState([
    {
      id: Date.now() + 1,
      title: "test2",
      content: "리액트 기초 공부해봅시다",
      isDone: true,
    },
  ]);

  // 할 일 삭제하기
  const clickTodoListRemoveHandler = function (id) {
    const newList = todoList.filter(function (list) {
      // console.log(list.id);
      return list.id !== id;
    });
    setTodoList(newList);
  };

  // 완료 삭제하기
  const ClickDTRemoveHandler = (id) => {
    const doneTodo = doneList.filter((list) => {
      return list.id !== id;
    });
    setDoneList(doneTodo);
  };

  // 할일 완료
  const clickDoneList = function (id) {
    const doneNewList = {
      id: id.id,
      title: id.title,
      content: id.content,
      isDone: !id.isDone,
    };
    const List = todoList.filter(function (list) {
      // console.log(list.id);
      return list.id !== id.id;
    });

    setTodoList(List);
    setDoneList([...doneList, doneNewList]);
  };

  // 완료 취소
  const clickCancelHandler = (id) => {
    const newCancelList = {
      id: id.id,
      title: id.title,
      content: id.content,
      isDone: !id.isDone,
    };
    const doneDelTodo = doneList.filter((list) => {
      return list.id !== id.id;
    });

    setDoneList(doneDelTodo);
    setTodoList([...todoList, newCancelList]);
  };
  console.log(todoList);
  console.log(doneList);

  return (
    <div className="layout">
      <div className="inputBox">
        <div style={{ marginLeft: "20px" }}>
          제목 :{" "}
          <input
            className="inputTitle"
            type="text"
            value={title}
            onChange={onChangeTitle}
          />
        </div>
        <div>
          내용 :{" "}
          <input
            type="text"
            className="inputContent"
            value={content}
            onChange={onChangeContent}
          />
        </div>
        <button className="addTodoListBtn" onClick={clickTodoListAddHandler}>
          추가하기
        </button>
      </div>

      <div>
        <h2>🔥Working</h2>
      </div>
      <div className="todoListBox">
        {todoList.map((todoList) => {
          return (
            <TodoList
              todoList={todoList}
              title={todoList.title}
              key={todoList.id}
              content={todoList.content}
              firstBtnHandler={clickTodoListRemoveHandler}
              secondBtnHandler={clickDoneList}
              firstBtn="삭제하기"
              secondBtn="완료하기"
            />
          );
        })}
      </div>

      <div>
        <h2>✌️Done!!</h2>
      </div>
      <div className="todoListBox">
        {doneList.map((doneList) => {
          return (
            <TodoList
              todoList={doneList}
              title={doneList.title}
              key={doneList.id}
              content={doneList.content}
              firstBtnHandler={ClickDTRemoveHandler}
              secondBtnHandler={clickCancelHandler}
              firstBtn="삭제하기"
              secondBtn="취소하기"
            />
          );
        })}
      </div>

      <footer>🦊🐾🦊</footer>
    </div>
  );
}

export default App;
