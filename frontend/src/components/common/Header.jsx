import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  height: 10vh;
  width: 100%;
  line-height: 10vh;
  background-color: #24292e;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  & h1 {
    font-size: 1.1rem;
  }
  & a {
    color: white;
    text-decoration: none;
    letter-spacing: 0.2rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to='/'>
        <h1>
          <i className='fas fa-book'></i>&nbsp; Tracker Hunter
        </h1>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
