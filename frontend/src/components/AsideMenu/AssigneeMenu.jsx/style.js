import styled from '@emotion/styled';

export const AssigneeList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const AssigneeDropDownContainer = styled.section`
  width: 100%;
  background-color: #fdfdfd;
  border-radius: 1px solid lightgrey;
  & .assign_title {
    font-size: 13px;
  }
  & ul {
    display: flex;
    flex-direction: column;
  }
`;
