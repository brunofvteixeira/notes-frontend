import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: main;
  display: grid;
  justify-content: center;
  align-content: start;

  /* background: #155aa2; */
`;

function BookInfo({ children }) {
  return <Container>{children}</Container>;
}

export default BookInfo;
