import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';

const Banner = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  padding: 10px;
  border-radius: 5px;
  border: 1px solid #50fa7b;

  height: minmax(100px, auto);
  width: 500px;

  background: #44475a;
  color: white;

  :hover {
    background: #6272a4;
  }

  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const TotalNotes = styled.div`
  border-left: 1px solid white;
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 2.5em;
  text-align: center;

  p {
    margin: 0;
  }

  p:nth-child(1) {
    /* align-self: center; */
  }

  p:nth-child(2) {
    font-size: 0.9rem;
    align-self: end;
  }
`;

export default function BookBanner({ id, title, author, totalNotes }) {
  const redirectToBook = id => {
    navigate(`/b/${id}`);
  };

  return (
    <Banner
      onClick={() => {
        redirectToBook(id);
      }}
    >
      <div>
        <p>{title}</p>
        <p>{author}</p>
      </div>
      <TotalNotes>
        <p>{totalNotes}</p>
        <p>notes</p>
      </TotalNotes>
    </Banner>
  );
}
