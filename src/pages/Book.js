import React, { useState, useEffect } from 'react';

import CenteredContainer from '../components/CenteredContainer';
import DefaultPage from '../components/DefaultPage';
import BookPageLayout from '../components/BookPageLayout';
import BookInfo from '../components/BookInfo';

import { getBookById } from '../services/api';

function Book({ id }) {
  const [book, setBook] = useState({});

  useEffect(() => {
    getBookById(id)
      .then(res => {
        setBook(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <DefaultPage>
      <CenteredContainer>
        <BookPageLayout>
          <BookInfo>{book.title || 'null'}</BookInfo>
        </BookPageLayout>
      </CenteredContainer>
    </DefaultPage>
  );
}

export default Book;
