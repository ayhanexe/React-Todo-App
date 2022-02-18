import styles from "styled-components";

const TodoContainer = styles.div`
    width:50%;
    min-height:100px;
    max-height:50vh;
    
    display:flex;
    flex-direction:column;
    position:relative;
    left:50%;
    transform:translateX(-50%);
    
    padding:15px;
    
    background-color:#1E1E3F;
    
    border-radius:10px;
    
    box-shadow:0 0 2px 1px rgba(0, 0, 0, 0.2);
    
    overflow-y:auto;
    
`;

export default TodoContainer;
