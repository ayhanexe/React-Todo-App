import React, { Component } from "react";
import { TodoConsumer } from "../../contexts/todo-context";
import TodoAddButton from "../todo-add-button/todo-add-button";
import TodoItem from "../todo-item/todo-item";
import TodoRoot from "../todo-root/todo-root";
import TodoText from "../todo-text/todo-text";
import TodoItemsContainer from "../todos-container/todo-container";

export default class Todo extends Component {
  state = {
    todos: [],
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TodoConsumer>
        {(value) => {
          return (
            <TodoRoot>
              <TodoItemsContainer>
                {value.todos.length == 0 ? (
                  <h1
                    style={{
                      color: "white",
                    }}
                  >
                    No Task Found
                  </h1>
                ) : (
                  value.todos.map((todo, index) => {
                    return (
                      <TodoItem
                        $isChecked={todo.isCompleted}
                        todoId={todo.id}
                        key={`${todo.id}-${index}`}
                        style={{
                          opacity: todo.isCompleted ? "0.5" : "1",
                        }}
                      >
                        <TodoText todoId={todo.id} text={todo.text}/>
                      </TodoItem>
                    );
                  })
                )}
              </TodoItemsContainer>
              <TodoAddButton>ADD TODO</TodoAddButton>
            </TodoRoot>
          );
        }}
      </TodoConsumer>
    );
  }
}
