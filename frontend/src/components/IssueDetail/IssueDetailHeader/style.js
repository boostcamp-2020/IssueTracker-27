import styled from '@emotion/styled';

export const IssueDetailHeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid #d2d2d2;
  display: flex;

  & .issue_detail_header {
    width: 95%;

    & .issue_detail_header_top {
      width: 100%;
      display: flex;
      justify-content: space-between;

      & h1 {
        & span {
          color: #a6abb1;
        }
      }
    }

    & .issue_detail_header_bottom {
      width: 100%;
      display: flex;
    }
  }
`;
