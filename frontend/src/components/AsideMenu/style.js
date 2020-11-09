import styled from '@emotion/styled';

export const AsideMenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 2rem;

  & .aside_drop_down_header {
    width: 100%;
    height: 1.7rem;
    background-color: #e6e6e6;
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.7rem;
    padding-left: 0.5rem;
    border-top-right-radius: 0.3rem;
    border-top-left-radius: 0.3rem;
  }

  & .aside_drop_down_filter {
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    border-bottom: 1px solid lightgray;
    background-color: #ffffff;
  }

  & .aside_drop_down_list {
    width: 100%;
    max-height: 15rem;
    overflow-y: auto;
  }

  & .check_mark {
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
  }
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
