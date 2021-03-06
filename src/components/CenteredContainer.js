import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  justify-items: center;
  align-items: start;
`;

export default function CenteredContainer({ children }) {
  return <Container>{children}</Container>;
}
