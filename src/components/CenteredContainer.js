import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 500px;
  justify-content: center;
  height: 100%;
  background: #282a36;
  align-items: start;
  padding-top: 30px;
`;

export default function CenteredContainer({ children }) {
  return <Container>{children}</Container>;
}
