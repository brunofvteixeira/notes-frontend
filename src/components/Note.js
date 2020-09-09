import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #f8f8f2;
`;

function Note({ content }) {
  return <Container>{content}</Container>;
}

export default Note;
