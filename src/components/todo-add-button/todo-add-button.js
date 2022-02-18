import React, { Component } from "react";
import { TodoConsumer } from "../../contexts/todo-context";
import TodoAddButtonItem from "./todo-add-button.styles";

export default class TodoAddButton extends Component {
  handleAddTodo(dispatch) {
    dispatch({
      type: "ADD_TODO",
    });
  }

  render() {
    return (
      <TodoConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <TodoAddButtonItem onClick={() => this.handleAddTodo(dispatch)}>
              {this.props.children}
            </TodoAddButtonItem>
          );
        }}
      </TodoConsumer>
    );
  }
}
