import styled from '@emotion/styled';

export const LabelListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  & .selected_labels {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const LabelMenuDropDownContainer = styled.section`
  width: 100%;
  z-index: 1;
`;
