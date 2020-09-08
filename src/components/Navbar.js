import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const Nav = styled.nav`
  height: 50px;

  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  justify-content: start;
  align-items: center;

  background: #282a36;
  color: #f8f8f2;
  border-bottom: 3px solid #ff79c6;
`;

function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/b">Books</NavLink>
    </Nav>
  );
}

export default Navbar;
