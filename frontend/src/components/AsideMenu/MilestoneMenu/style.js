import styled from '@emotion/styled';

export const MilestoneSelected = styled.section`
  & .graph {
    height: 0.8rem;
    background: #cccccc;
    border-radius: 40px;
  }
  & .milestone_selected_title {
    font-size: 1.1rem;
    color: #70767d;
  }
`;

export const MilestoneContainer = styled.ul`
  width: 100%;

  & .milestone_list_header {
    height: 1.5rem;
    background-color: #f7f8fa;
  }

  & .milestone_list_content {
    list-style: none;
    background-color: #fdfdfd;
  }
`;
