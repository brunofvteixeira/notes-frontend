import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #f8f8f2;
  display: grid;
  grid-template-columns: 10fr 1fr;
  border-bottom: 1px solid #8be9fd;
  overflow: auto;

  p {
    margin: 0.7rem 0;
    padding: 0 10px;
  }
`;

function Note({ content }) {
  return (
    <Container>
      <p>{content}</p>
    </Container>
  );
}

export default Note;
