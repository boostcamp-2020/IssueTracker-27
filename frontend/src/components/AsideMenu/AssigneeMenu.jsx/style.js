import styled from '@emotion/styled';

export const AssigneeContainer = styled.section`
  position: relative;

  & .assignee_header {
    display: flex;
    justify-content: space-between;
  }

  & .assignee_title {
    font-weight: bold;
  }
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
