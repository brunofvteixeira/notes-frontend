import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  height: 60px;
  padding: 0 20px;
  margin-bottom: 30px;

  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  justify-content: start;
  align-items: center;
  grid-gap: 40px;

  background: #282a36;
  color: #f8f8f2;
`;

function Navbar() {
  return (
    <Nav>
      <p>Books</p>
      <p>Books</p>
      <p>Books</p>
      <p>Books</p>
      <p>Books</p>
      <p>Books</p>
    </Nav>
  );
}

export default Navbar;
