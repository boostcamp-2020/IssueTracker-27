import React from 'react';
import { GreenButton, TagButton } from '@common/Buttons';
import Filter from './Filter';
import { Link } from 'react-router-dom';
import MenuContainer from './style';

const Menu = () => {
  return (
    <MenuContainer>
      <Filter />
      <div className='menu_buttons'>
        <Link to='/label'>
          <TagButton width='5rem'>Label</TagButton>
        </Link>
        <Link to='/milestone'>
          <TagButton width='5rem'>Milestone</TagButton>
        </Link>
        <Link to='/new-issue'>
          <GreenButton width='5rem'>New Issue</GreenButton>
        </Link>
      </div>
    </MenuContainer>
  );
};

export default Menu;
