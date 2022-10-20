import React, { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import TopBar from "./components/TopBar";
import { CreateTodo } from "./components/CreateTodo";
import { TodoList } from "./components/TodoList";
function App() {
  const defaultState = [
    {
      title: "Complete online JavaScript Course",
      completed: true,
    },
    {
      title: "Jog around the park 3x",
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(defaultState);
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  return (
    <div className={`App ${dark ? " bgDark" : ""}`}>
      <Header dark={dark} />
      <Container>
        <TopBar dark={dark} setDark={setDark} />
        <CreateTodo todos={todos} setTodos={setTodos} dark={dark} />
        <TodoList todos={todos} setTodos={setTodos} dark={dark} />
      </Container>
    </div>
  );
}

export default App;
