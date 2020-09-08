import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Container = styled.div`
  height: calc(100vh);

  background: #282a36;

  display: grid;
  grid-template-rows: auto 1fr auto;
`;

function DefaultPage({ children }) {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}

export default DefaultPage;
