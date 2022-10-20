import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Clear,
  Container,
  Delete,
  Filter,
  FilterContainer,
  JobContainer,
  LeftNum,
  ListFooter,
  Title,
} from "./styledList";

import check from "../../images/icon-check.svg";
import cross from "../../images/icon-cross.svg";

export const TodoList = ({ todos, setTodos, dark }) => {
  const [filter, setFilter] = useState("all");
  const [list, setList] = useState([]);

  useEffect(() => {
    if (filter === "active") {
      const temp = todos.filter((todo) => todo.completed === false);
      setList(temp);
    } else if (filter === "completed") {
      const temp = todos.filter((todo) => todo.completed === true);
      setList(temp);
    } else {
      setList(todos);
    }
  }, [todos, filter]);

  function getWidth() {
    const { innerWidth: width } = window;
    return width;
  }

  const taskCheck = (todo) => {
    const temp = todos.map((el) => {
      if (todo === el) {
        return { ...el, completed: !todo.completed };
      } else {
        return el;
      }
    });
    setTodos(temp);
  };

  const handleMouseOver = (title) => {
    const deleteElement = document.getElementsByClassName(title)[0];
    if (deleteElement.classList.contains("hidden")) {
      deleteElement.classList.remove("hidden");
    }
  };

  const handleMouseOut = (title) => {
    const deleteElement = document.getElementsByClassName(title)[0];
    if (!deleteElement.classList.contains("hidden")) {
      deleteElement.classList.add("hidden");
    }
  };

  const removeElement = (title) => {
    const temp = todos.filter((todo) => {
      if (!(todo.title === title)) {
        return todo;
      }
    });
    setTodos(temp);
  };

  const clearTodos = () => {
    const temp = todos.filter((todo) => !todo.completed);
    setTodos(temp);
  };
  const active = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <Container dark={dark}>
        {list.map((todo) => {
          return (
            <JobContainer
              key={todo.title}
              onMouseOver={() => handleMouseOver(todo.title)}
              onMouseOut={() => handleMouseOut(todo.title)}
              dark={dark}
            >
              <Checkbox
                active={todo.completed}
                onClick={() => taskCheck(todo)}
                dark={dark}
              >
                {todo.completed ? <img src={check} alt="C" /> : null}
              </Checkbox>
              <Title active={todo.completed} dark={dark}>
                {todo.title}
              </Title>
              <Delete
                src={cross}
                alt="X"
                className={`${todo.title} hidden`}
                onClick={() => removeElement(todo.title)}
                dark={dark}
              />
            </JobContainer>
          );
        })}
        <ListFooter dark={dark}>
          <LeftNum dark={dark}>{active.length} items left</LeftNum>
          {getWidth() > 560 && (
            <FilterContainer>
              <Filter
                onClick={() => setFilter("all")}
                className={filter === "all" ? "active" : "primary"}
                dark={dark}
              >
                All
              </Filter>
              <Filter
                onClick={() => setFilter("active")}
                className={filter === "active" ? "active" : "primary"}
                dark={dark}
              >
                Active
              </Filter>
              <Filter
                style={{ marginRight: 0 }}
                onClick={() => setFilter("completed")}
                className={filter === "completed" ? "active" : "primary"}
                dark={dark}
              >
                Completed
              </Filter>
            </FilterContainer>
          )}

          <Clear onClick={clearTodos} dark={dark}>
            Clear Completed
          </Clear>
        </ListFooter>
      </Container>
      {getWidth() <= 560 && (
        <ListFooter
          dark={dark}
          style={{
            marginTop: 16,
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <FilterContainer>
            <Filter
              onClick={() => setFilter("all")}
              className={filter === "all" ? "active" : "primary"}
              dark={dark}
            >
              All
            </Filter>
            <Filter
              onClick={() => setFilter("active")}
              className={filter === "active" ? "active" : "primary"}
              dark={dark}
            >
              Active
            </Filter>
            <Filter
              style={{ marginRight: 0 }}
              onClick={() => setFilter("completed")}
              className={filter === "completed" ? "active" : "primary"}
              dark={dark}
            >
              Completed
            </Filter>
          </FilterContainer>
        </ListFooter>
      )}
    </div>
  );
};
