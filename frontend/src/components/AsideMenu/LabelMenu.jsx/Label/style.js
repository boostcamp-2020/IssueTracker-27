import styled from '@emotion/styled';

export const LabelContainer = styled.li`
  display: flex;
  background-color: ${props => props.bgcolor};
  padding: 0.3rem;
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;
  border-radius: 0.3rem;
`;

export const DropDownLabelContainer = styled.li`
  display: flex;
  background-color: #ffffff;
  font-size: 0.8rem;
  padding: 0.5rem;
  border-bottom: 1px solid lightgrey;

  & .drop_down_label_content {
    display: flex;
    flex-direction: column;
  }

  & .drop_down_content_header {
    display: flex;
    align-items: center;
  }

  & .drop_down_color {
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${props => props.bgcolor};
    border-radius: 0.1rem;
  }

  & .drop_down_title {
    margin-left: 0.5rem;
  }

  &.drop_down_description {
  }
`;
