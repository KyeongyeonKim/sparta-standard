import React from "react";

function Todo({ todo, deleteBtnHandler, onChangeHandler }) {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.content}</p>
      <p>
        <button onClick={() => deleteBtnHandler(todo.id)}>삭제하기</button>
        <button onClick={() => onChangeHandler(todo.id)}>
          {todo.isDone === false ? "완료하기" : "취소하기"}
        </button>
      </p>
    </div>
  );
}

export default Todo;
