import React from 'react';
import { OpenedWrapper } from './style';

const Opened = ({ openAt, username }) => {
  //TODO: 시간 계산 해야함.
  return (
    <OpenedWrapper>
      opened {openAt} by {username}
    </OpenedWrapper>
  );
};

export default Opened;
