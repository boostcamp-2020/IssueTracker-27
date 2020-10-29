import React from 'react';
import GreenButton from '../components/GreenButton';
import LabelButton from '../components/LabelButton';
import MilestoneButton from '../components/MilestoneButton';
import Filter from '../components/Filter';
import styled from '@emotion/styled';

const MenuContainer = styled.menu`
    display: flex;
    
`;

const Menu = () => {
    return (
        <MenuContainer>
          <Filter /> <LabelButton /> <MilestoneButton /> <GreenButton buttonText={'New Issue'}/>  
        </MenuContainer>
    );
};

export default Menu;