import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const deleteBtnHandler = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  };

  const onChangeHandler = (id) => {
    const newList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(newList);
  };

  return (
    <div>
      <div>
        <p>working</p>
        <div>
          {todos
            .filter((todo) => todo.isDone === false)
            .map((todo) => {
              return (
                <div
                  key={todo.id}
                  style={{
                    border: "1px solid black",
                    margin: "10px",
                    width: "200px",
                  }}
                >
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                  <p>
                    <button onClick={() => deleteBtnHandler(todo.id)}>
                      삭제
                    </button>
                    <button onClick={() => onChangeHandler(todo.id)}>
                      완료하기
                    </button>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <p>done</p>
        <div>
          {todos
            .filter((todo) => todo.isDone === true)
            .map((todo) => {
              return (
                <div
                  key={todo.id}
                  style={{
                    border: "1px solid black",
                    margin: "10px",
                    width: "200px",
                  }}
                >
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                  <p>
                    <button onClick={() => deleteBtnHandler(todo.id)}>
                      삭제
                    </button>
                    <button onClick={() => onChangeHandler(todo.id)}>
                      취소하기
                    </button>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
