import React, { Component } from "react";
import { TodoConsumer } from "../../contexts/todo-context";
import TodoRemoveButton from "../todo-remove-button/todo-remove-button";
import TodoItemDiv, { TodoItemCheckbox } from "./todo-item.styles";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  handleOnChange = (dispatch, todoId, e) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: {
        todoId,
        data: e.target.checked,
      },
    });
  };

  handleDelete = (dispatch, todoId) => {
    dispatch({
      type: "DELETE_TODO",
      payload: {
        todoId
      },
    });
  };

  render() {
    return (
      <TodoConsumer>
        {(value) => {
          const { dispatch } = value;
          const { todoId, $isChecked } = this.props;
          return (
            <TodoItemDiv {...this.props}>
              {this.props.children}
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                }}
              >
                <TodoRemoveButton
                  onClick={() => this.handleDelete(dispatch, todoId)}
                />
                <TodoItemCheckbox
                defaultChecked={$isChecked}
                  onChange={(e) => this.handleOnChange(dispatch, todoId, e)}
                />
              </div>
            </TodoItemDiv>
          );
        }}
      </TodoConsumer>
    );
  }
}
