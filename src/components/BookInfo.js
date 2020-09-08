import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: main;
  background: white;
`;

function BookInfo({ children }) {
  return <Container>{children}</Container>;
}

export default BookInfo;
