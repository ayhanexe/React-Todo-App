import styled from "styled-components";

const TodoAddButton = styled.button`
    padding:10px 20px;
    border:none;
    border-radius:10px;
    background-color:#272D68;
    color:whitesmoke;
    margin:20px 0;
    cursor:pointer;
`;

const TodoAddButtonItem = (props) => {
    return <TodoAddButton {...props}></TodoAddButton>
}

export default TodoAddButtonItem;