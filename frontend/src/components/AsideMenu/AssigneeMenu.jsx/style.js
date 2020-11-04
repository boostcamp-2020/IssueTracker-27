import styled from '@emotion/styled';

export const AssigneeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const AssigneeDropDownContainer = styled.section`
  position: absolute;
  width: 15rem;
  bottom: 0;
  background-color: lightblue;
  border: 1px solid blue;

  & .assign_title {
    font-size: 13px;
  }
`;
