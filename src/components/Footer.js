import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto;
  justify-content: center;
  grid-template-rows: 50px;
  align-items: center;

  border-top: 3px solid #ff79c6;
  color: #f8f8f2;
`;

function Footer({ children }) {
  return <Container></Container>;
}

export default Footer;
