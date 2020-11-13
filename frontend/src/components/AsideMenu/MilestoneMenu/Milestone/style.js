import styled from '@emotion/styled';

export const MilestoneItem = styled.li`
  width: 100%;
  height: 3.5rem;
  display: flex;
  & .milestone_section {
    border-radius: 1px solid lightgrey;
  }
  & .blank {
    width: 10%;

    & .icon {
      padding-left: 0.5rem;
      padding-top: 0.1rem;
      color: #70767d;
    }
  }
  & .milestone_title {
    font-size: 1.2rem;
    color: #70767d;
  }

  & .milestone_duedate {
    font-size: 0.9rem;
    color: #b9bcbf;
  }
`;
