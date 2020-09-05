import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 500px;
  justify-content: center;
  grid-gap: 10px;
`;

export default function CenteredContainer({ children }) {
  return <Container>{children}</Container>;
}
