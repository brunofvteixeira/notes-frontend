import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  padding: 10px;
  border-radius: 5px;
  border: 1px solid #50fa7b;

  height: 100px;

  :hover {
    background: #44475a;
  }

  color: white;
`;

export default function BookBanner({ title, author }) {
  return (
    <Banner>
      <p>{title}</p>
      <p>{author}</p>
    </Banner>
  );
}
