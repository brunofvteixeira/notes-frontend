import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Container = styled.div`
  height: calc(100vh - 10px);

  display: grid;
  grid-template-rows: auto 1fr auto;
`;

function DefaultPage({ children }) {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
}

export default DefaultPage;
