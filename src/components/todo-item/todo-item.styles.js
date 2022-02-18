import styled from "styled-components";

const TodoItemDiv = styled.div`
  width: 100%;
  background-color: #2d2b55;
  color: whitesmoke;
  padding: 10px;
  margin: 5px 0;
  text-align: left;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoItemInput = styled.input``;

export function TodoItemCheckbox(props) {
  return <TodoItemInput {...props} type="checkbox" role="checkbox" />;
}

export default TodoItemDiv;
