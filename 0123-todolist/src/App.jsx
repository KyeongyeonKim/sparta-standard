import "./App.css";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import InputArea from "./components/InputArea";
import uuid from "react-uuid";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "리액트 공부",
      content: "리액트 공부하기",
      isDone: false,
    },
  ]);

  return (
    <div>
      <header>My Todo List</header>
      <InputArea todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer />
    </div>
  );
}

export default App;
