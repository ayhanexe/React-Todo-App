import styled from "styled-components";

const RemoveButtonIcon = styled.i`
  cursor: pointer;
  color: #ff2d68;
`;

export const RemoveButton = (props) => {
  return (
    <RemoveButtonIcon
      {...props}
      className={`${props?.className} bi-trash3-fill`}
    />
  );
};
