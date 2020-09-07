import React, { useState, useEffect } from 'react';

import CenteredContainer from '../components/CenteredContainer';
import DefaultPage from '../components/DefaultPage';

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
      <CenteredContainer>{book.title || 'null'}</CenteredContainer>
    </DefaultPage>
  );
}

export default Book;
