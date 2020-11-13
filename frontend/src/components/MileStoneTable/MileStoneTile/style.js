import styled from '@emotion/styled';

export const MileStoneTileContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  & .graph {
    height: 0.8rem;
    background: #cccccc;
    border-radius: 40px;
  }
  & .milestone_title {
  }
  & .milestone_date {
  }
  & .milestone_des {
  }
`;

export const MileStoneTitleWraper = styled.article`
  display: flex;
  & span {
    margin-right: 1rem;
  }
  & .small_blue_btn {
    color: blue;
    cursor: pointer;
  }
  & .small_red_btn {
    color: red;
    cursor: pointer;
  }
`;
