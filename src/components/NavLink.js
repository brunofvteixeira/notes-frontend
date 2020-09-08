import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  margin: 0px 20px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #f8f8f2;
  }

  :hover {
    border-bottom: 3px solid #50fa7b;
  }
`;

function NavLink({ children, to }) {
  return (
    <Wrapper>
      <Link to={to}>{children}</Link>
    </Wrapper>
  );
}

export default NavLink;
