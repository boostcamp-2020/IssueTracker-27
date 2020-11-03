import styled from '@emotion/styled';

export const LabelMenuContainer = styled.section`
  position: relative;

  & .label_header {
    display: flex;
    justify-content: space-between;
  }

  & .label_title {
    font-weight: bold;
  }

  & .label_setting_btn {
  }

  & .label_selected {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const LabelMenuDropDownContainer = styled.section`
  position: absolute;
  bottom: 0;
  background-color: lightblue;
  border: 1px solid blue;
`;
