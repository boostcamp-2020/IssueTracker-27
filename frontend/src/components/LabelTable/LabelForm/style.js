import styled from '@emotion/styled';

export const LabelFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  & .label_input {
    display: flex;
  }

  & .label_input_group {
    display: flex;
    flex-direction: column;
  }

  & .label_color_selector {
    display: flex;
    flex-direction: row;
  }
`;

export const LabelPreview = styled.div`
  background-color: ${props => props.bgcolor};
`;
