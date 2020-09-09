import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
`;

function NewNoteContainer({ children }) {
  return <Container>{children}</Container>;
}

export default NewNoteContainer;
