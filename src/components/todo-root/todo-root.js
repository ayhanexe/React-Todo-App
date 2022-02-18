import React, { Component } from 'react'
import TodoRootDiv from './todo-root.styles'

export default class TodoRoot extends Component {
  render() {
    return (
        <TodoRootDiv>{this.props.children}</TodoRootDiv>
    )
  }
}
