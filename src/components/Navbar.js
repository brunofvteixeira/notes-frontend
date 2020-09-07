import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 0 20px;

  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  justify-content: start;
  align-items: center;
  grid-gap: 40px;

  background: #282a36;
  color: #f8f8f2;
  border-bottom: 3px solid #ff79c6;
`;

function Navbar() {
  return (
    <Nav>
      <p>Books</p>
    </Nav>
  );
}

export default Navbar;
