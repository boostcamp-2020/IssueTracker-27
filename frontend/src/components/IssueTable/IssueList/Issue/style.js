import styled from '@emotion/styled';

export const IssueItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 0.5rem;
  & .issue_content {
    & .issue_title {
      margin-right: 0.5rem;
    }
  }
`;

export const LabelItem = styled.span`
  border-radius: 5px;
  margin-right: 0.5rem;
  padding: 0.2rem;
  background-color: ${props => props.color};
  color: black;
  font-size: 0.8rem;
`;

export const TitleWrapper = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
`;

export const IconWrapper = styled.span`
  font-size: 1.3rem;
  color: ${props => (props.status ? 'green' : 'red')};
  margin: 0 0.5rem;
`;

export const MilestoneWrapper = styled.span`
  margin: 0 0.5rem;
`;

export const OpenedWrapper = styled.span``;
