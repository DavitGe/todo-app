import React, { useState } from "react";
import { Checkbox, Input, InputContainer } from "./StyledInput";

import check from "../../images/icon-check.svg";

export const CreateTodo = ({ todos, setTodos, dark }) => {
  const [newTodo, setNewTodo] = useState({ title: "", completed: false });

  const inputHandler = (e) => {
    setNewTodo({ ...newTodo, title: e.target.value });
  };

  const checkboxHandler = () => {
    setNewTodo({ ...newTodo, completed: !newTodo.completed });
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      if (newTodo !== "") {
        const exists = todos.filter((todo) => todo.title === newTodo.title);
        console.log("exists", exists);
        if (exists === []) {
          console.log("Such task already exists!");
        } else {
          setTodos([...todos, newTodo]);
          console.log("created");
        }
        setNewTodo("");
        e.target.value = "";
      }
    }
  };

  return (
    <InputContainer dark={dark}>
      <Checkbox
        active={newTodo.completed}
        onClick={checkboxHandler}
        dark={dark}
      >
        {newTodo.completed ? (
          <img src={check} alt="C" className="check" />
        ) : null}
      </Checkbox>
      <Input
        placeholder="Create a new todo..."
        value={newTodo.title}
        onChange={inputHandler}
        onKeyDown={enterHandler}
        dark={dark}
      />
    </InputContainer>
  );
};
