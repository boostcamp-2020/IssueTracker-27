import styled from '@emotion/styled';

export const IssueDetailContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  & .user_profile {
    width: 10%;
  }
  & .detail_content {
    width: 80%;
    border: 1px solid #e8eff8;
    border-radius: 5px;

    & .detail_content_header {
      width: 100%;
      height: 2.5rem;
      line-height: 2.5rem;
      display: flex;
      justify-content: space-between;
      background-color: #f1f8ff;

      & .detail_content_header_left {
        display: flex;
      }

      & .detail_content_header_right {
        display: flex;
      }
    }

    & .detail_content_description {
      height: 7rem;
    }
  }
`;
