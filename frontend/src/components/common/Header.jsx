import React from 'react';
import {Link} from 'react-router-dom'
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  height: 5rem;
  width: 100%;
  line-height: 5rem;
  background-color: #24292e;
  font-weight: 700;
  text-align: center;

  & a {
    color: white;
    text-decoration: none;
    letter-spacing: 0.2rem;
  }
`;

const Header = () => {
  return (
  <HeaderContainer>
    <Link to="/main">
      <i class="fas fa-book"></i>&nbsp;
      ISSUES
    </Link>
  </HeaderContainer>);
}

export default Header;