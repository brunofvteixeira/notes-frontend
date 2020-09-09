import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Container = styled.div`
  height: calc(100vh);

  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 30px;

  background: #282a36;
  overflow: auto;
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
