import React, { Component } from "react";
import DataService from "../services/data-service/DataService";

const TodoContext_ = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TODO":
      const change = state.todos.filter(
        (todo) => todo.id == action.payload.todoId
      )[0];

      if (change) {
        change.isCompleted = action.payload.data;
      }

      return {
        ...state,
        todos: state.todos,
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo) => todo.id != action.payload.todoId),
        ],
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: "Click Here For Edit",
            isCompleted: false,
          },
        ],
      };

    case "SAVE_TODO":
      const todo = state.todos.filter(
        (todo) => todo.id == action.payload.todoId
      );
      todo.text = action.payload.value;

      return {
        ...state,
      };
  }
};

class TodoContext extends Component {
  state = {
    todos: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  constructor(props) {
    super(props);

    this.dataService = new DataService();
  }

  componentDidMount() {
    this.dataService.getData().then((data) => {
      this.setState({
        todos: data,
      });
    });
  }

  render() {
    return (
      <TodoContext_.Provider value={this.state}>
        {this.props.children}
      </TodoContext_.Provider>
    );
  }
}

export const TodoConsumer = TodoContext_.Consumer;

export default TodoContext;
