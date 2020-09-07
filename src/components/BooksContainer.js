import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
`;

function BooksContainer({ children }) {
  return <Container>{children}</Container>;
}

export default BooksContainer;
