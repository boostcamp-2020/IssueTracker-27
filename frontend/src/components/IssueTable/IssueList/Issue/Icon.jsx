import React from 'react';
import { IconWrapper } from './style';

const Icon = ({ status }) => {
  return (
    <IconWrapper status={status}>
      {status ? (
        <i className='fas fa-exclamation-circle'></i>
      ) : (
        <i className='fas fa-exclamation-triangle'></i>
      )}
    </IconWrapper>
  );
};

export default Icon;
