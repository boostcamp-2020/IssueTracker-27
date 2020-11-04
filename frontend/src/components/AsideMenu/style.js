import styled from '@emotion/styled';

export const AsideMenuContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const AsideMenuHeaderContainer = styled.div`
  position: relative;

  & .aside_menu_header {
    display: flex;
    justify-content: space-between;
  }

  & .aside_menu_title {
    font-weight: bold;
    color: #70767d;
    margin-bottom: 0.5rem;
  }

  & .aside_menu_setting_btn {
    color: #9ca2aa;
  }
`;
