import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

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
  const [todoList, setTodoList] = useState([]);

  const clickTodoListAddHandler = () => {
    const newTodoLIst = {
      id: Date.now(),
      title,
      content: content,
    };
    setTodoList([...todoList, newTodoLIst]);
    setTitle("");
    setContent("");
  };

  // 완료카드? 완료된 카드가 보이도록 state를 하나 더 만들어줌
  const [doneList, setDoneList] = useState([]);

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
    };
    const List = todoList.filter(function (list) {
      // console.log(list.id);
      return list.id !== id.id;
    });
    console.log(id);
    setTodoList(List);
    setDoneList([...doneList, doneNewList]);
  };

  // 완료 취소
  const clickCancelHandler = (id) => {
    const newCancelList = {
      id: id.id,
      title: id.title,
      content: id.content,
    };
    const doneDelTodo = doneList.filter((list) => {
      return list.id !== id.id;
    });
    console.log(id);
    setDoneList(doneDelTodo);
    setTodoList([...todoList, newCancelList]);
  };

  return (
    <div className="layout">
      <h1>TODO LIST</h1>
      <div>
        <div>
          제목 : <input type="text" value={title} onChange={onChangeTitle} />
        </div>
        <div>
          내용 :{" "}
          <input type="text" value={content} onChange={onChangeContent} />
        </div>
        <button onClick={clickTodoListAddHandler}>추가하기</button>
      </div>
      <div>
        <p>🔥Working</p>
      </div>

      {todoList.map((todoList) => {
        return (
          <div>
            <div key={todoList.id}>
              <p>{todoList.title}</p>
              {todoList.content}
            </div>
            <button
              onClick={() => {
                clickTodoListRemoveHandler(todoList.id);
              }}
            >
              삭제하기
            </button>
            <button
              onClick={() => {
                clickDoneList(todoList);
              }}
            >
              완료
            </button>
          </div>
        );
      })}

      <div>
        <p>✌️Done!!</p>
      </div>

      {doneList.map((doneList) => {
        return (
          <div>
            <div key={doneList.id}>
              <p>{doneList.title}</p>
              {doneList.content}
            </div>
            <button
              onClick={() => {
                ClickDTRemoveHandler(doneList.id);
              }}
            >
              삭제하기
            </button>
            <button
              onClick={() => {
                clickCancelHandler(doneList);
              }}
            >
              취소
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
