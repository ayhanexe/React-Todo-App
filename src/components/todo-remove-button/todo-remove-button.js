import React, { Component } from "react";
import { RemoveButton } from "./todo-remove-button.styles";

export default class TodoRemoveButton extends Component {
  render() {
    return <RemoveButton {...this.props} />;
  }
}
