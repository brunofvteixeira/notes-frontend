import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-gap: 20px;
  justify-items: center;
  margin-bottom: 30px;
  width: 100%;
`;

function NewNoteContainer({ children }) {
  return <Container>{children}</Container>;
}

export default NewNoteContainer;
