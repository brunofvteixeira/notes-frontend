import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: start;
  grid-template-columns: 1fr;
`;

function NotesContainer({ children }) {
  return <Container>{children}</Container>;
}

export default NotesContainer;
