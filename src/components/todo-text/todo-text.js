import React, { Component } from "react";
import { TodoConsumer } from "../../contexts/todo-context";
import TodoTextItem from "./todo-text.styles";

export default class TodoText extends Component {
  handleChange = (e) => {
    const target = e.target;
    target.value = e.target.value;
  };

  handleSaveTodo = (dispatch, e, todoId) => {
    dispatch({
      type: "SAVE_TODO",
      payload: {
        todoId,
        value: e.target.value,
      },
    });
  };

  render() {
    return (
      <TodoConsumer>
        {(value) => {
          const { dispatch } = value;
          const { todoId } = this.props;

          return (
            <TodoTextItem
              onBlur={(e) => this.handleSaveTodo(dispatch, e, todoId)}
              onChange={this.handleChange}
              {...this.props}
              defaultValue={this.props.text}
            />
          );
        }}
      </TodoConsumer>
    );
  }
}
