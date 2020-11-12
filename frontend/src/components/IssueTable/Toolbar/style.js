import styled from '@emotion/styled';

export const ToolbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const BaseOptionContainer = styled.div`
  display: flex;
`;
export const DetailOptionContainer = styled.div`
  display: flex;
`;

export const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
`;

export const UserImageBox = styled.span`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const LabelColorBox = styled.span`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  background: ${props => props.color};
`;
