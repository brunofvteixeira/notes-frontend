import React, { useState, useEffect } from 'react';

import CenteredContainer from '../components/CenteredContainer';
import BookBanner from '../components/BookBanner';
import DefaultPage from '../components/DefaultPage';
import BooksListContainer from '../components/BooksListContainer';

export default function BooksList() {
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
        id: 1,
        title: 'Cristianismo Puro e Simples',
        author: 'C.S. Lewis',
        total_notes: 100,
      },
      {
        id: 2,
        title: 'Crime e Castigo',
        author: 'Fiódor Dostoiévski',
        total_notes: 26,
      },
    ];

    setBooks(placeholder);
  }, []);

  return (
    <DefaultPage>
      <CenteredContainer>
        <BooksListContainer>
          {books
            ? books.map(book => (
                <BookBanner
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  totalNotes={book.total_notes}
                />
              ))
            : null}
        </BooksListContainer>
      </CenteredContainer>
    </DefaultPage>
  );
}
