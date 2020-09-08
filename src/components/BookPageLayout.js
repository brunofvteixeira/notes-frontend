import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;

  grid-template-areas: 'sidebar1 main sidebar2';
`;
function BookPageLayout({ children }) {
  return <Container>{children}</Container>;
}

export default BookPageLayout;
