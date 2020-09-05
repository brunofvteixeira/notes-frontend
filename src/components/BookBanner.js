import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
`;

export default function BookBanner({ title, author }) {
  return (
    <Banner>
      <p>{title}</p>
      <p>{author}</p>
    </Banner>
  );
}
