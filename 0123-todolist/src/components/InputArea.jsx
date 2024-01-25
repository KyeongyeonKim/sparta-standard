import React, { useState } from "react";
import uuid from "react-uuid";

function InputArea({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentHandler = (event) => {
    setContent(event.target.value);
  };
  const todoAdd = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={todoAdd}>
        제목 : <input type="text" value={title} onChange={titleHandler} />
        내용 : <input type="text" value={content} onChange={contentHandler} />
        <button type="submit">추가</button>
      </form>
    </div>
  );
}

export default InputArea;
