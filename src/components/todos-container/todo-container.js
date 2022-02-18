import React, { Component } from 'react'
import TodoContainer from './todo-container.styles'

export default class TodoItemsContainer extends Component {
  render() {
    return (
      <TodoContainer>{this.props.children}</TodoContainer>
    )
  }
}
