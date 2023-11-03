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
      id: todoList.length + 1,
      title,
      content: content,
      isDone: false,
    };
    setTodoList([...todoList, newTodoLIst]);
    setTitle("");
    setContent("");
  };

  // 완료카드? 완료된 카드가 보이도록 state를 하나 더 만들어줌
  const [doneList, setDoneList] = useState([]);

  // 삭제하기
  const clickTodoListRemoveHandler = function (id) {
    const newList = todoList.filter(function (list) {
      // console.log(list.id);
      return list.id !== id;
    });
    setTodoList(newList);
  };

  // 클릭을 하면 isDone 값이 true면 취소버튼... false면 완료버튼...
  // 모두 등록 후 완료하면 id값이 다르지만 등록-완료-등록-완료 하면 id값이 같음..
  const clickDoneList = function (id) {
    const doneNewList = todoList.filter((list) => {
      if (list.id === id) {
        list.isDone = !list.isDone;
      }
      return list.id === id;
    });
    const List = todoList.filter(function (list) {
      // console.log(list.id);
      return list.id !== id;
    });
    console.log(...doneList, ...doneNewList);
    setTodoList(List);
    setDoneList([...doneList, ...doneNewList]);
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

      {todoList.map((list) => {
        return (
          <div>
            <div key={list.id}>
              <p>{list.title}</p>
              {list.content}
            </div>
            <button
              onClick={() => {
                clickTodoListRemoveHandler(list.id);
              }}
            >
              삭제하기
            </button>
            <button
              onClick={() => {
                clickDoneList(list.id);
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

      {doneList.map((list) => {
        return (
          <div>
            <div key={list.id}>
              <p>{list.title}</p>
              {list.content}
            </div>
            <button
              onClick={() => {
                clickTodoListRemoveHandler(list.id);
              }}
            >
              삭제하기
            </button>
            <button
              onClick={() => {
                clickDoneList(list.id);
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
