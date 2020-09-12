import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: main;
  display: grid;
  grid-auto-columns: 1fr;
  align-content: start;
`;

function BookInfo({ children }) {
  return <Container>{children}</Container>;
}

export default BookInfo;
