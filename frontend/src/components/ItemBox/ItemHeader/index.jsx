import React, { useState } from 'react';
import ItemHeaderContainer from './style';
import { GreenButton, TagButton } from '@common/Buttons';
import { Link } from 'react-router-dom';


const ItemHeader = ({ type, onClick}) => {

  return (
    <ItemHeaderContainer>
      <div>
        <Link to='/label'>
          <TagButton width='5rem' selected={type === 'label'}>
            Label
          </TagButton>
        </Link>
        <Link to='/milestone'>
          <TagButton width='5rem' selected={type === 'milestone'}>
            Milestone
          </TagButton>
        </Link>
      </div>
      {type === 'label' ? (
        <GreenButton width='5rem' onClick={onClick}>
          New label
        </GreenButton>
      ) : (
        <Link to='/new-milestone'>
          <GreenButton width='5rem'>
            'New Milestone'
          </GreenButton>
        </Link>
      )}
    </ItemHeaderContainer>
  );
};

export default ItemHeader;
