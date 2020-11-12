import styled from '@emotion/styled';

const LabelTileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  height: 3rem;
  padding: 0.5rem;

  & .label_tile_title {
    background-color: ${props => props.bgcolor};
  }
`;

export default LabelTileContainer;
