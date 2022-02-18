import styled from "styled-components";

const TodoTextInput = styled.input`
  width: 100%;
  border: none;
  outline: none !important;
  background-color: transparent;
  color: whitesmoke;
  box-shadow: none;
`;

const TodoTextItem = (props) => {
  return <TodoTextInput {...props} />;
};

export default TodoTextItem;
