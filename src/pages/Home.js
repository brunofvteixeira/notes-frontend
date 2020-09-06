import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import CenteredContainer from '../components/CenteredContainer';
import BookBanner from '../components/BookBanner';
import DefaultPage from '../components/DefaultPage';

// import { getAllBooks } from '../services/api';

const BooksContainer = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // getAllBooks()
    //   .then(res => {
    //     setBooks(res.data);
    //   })
    //   .catch(err => {
    //     console.log('err');
    //   });
    const placeholder = [
      {
        title: 'Cristianismo Puro e Simples',
        author: 'C.S. Lewis',
      },
      {
        title: 'Crime e Castigo',
        author: 'Fiódor Dostoiévski',
      },
    ];

    setBooks(placeholder);
  }, []);

  return (
    <DefaultPage>
      <CenteredContainer>
        <BooksContainer>
          {books
            ? books.map(book => (
                <BookBanner title={book.title} author={book.author} />
              ))
            : null}
        </BooksContainer>
      </CenteredContainer>
    </DefaultPage>
  );
}
