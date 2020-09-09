import React, { useState, useEffect, createRef } from 'react';

import CenteredContainer from '../components/CenteredContainer';
import DefaultPage from '../components/DefaultPage';
import BookPageLayout from '../components/BookPageLayout';
import BookInfo from '../components/BookInfo';
import NewNoteContainer from '../components/NewNoteContainer';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import NotesContainer from '../components/NotesContainer';
import Note from '../components/Note';

import { getBookById, postNewNote } from '../services/api';

function Book({ id }) {
  const [book, setBook] = useState({});
  const noteRef = createRef();

  useEffect(() => {
    getBookById(id)
      .then(res => {
        setBook(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  function createNote() {
    const { value } = noteRef.current;

    if (!value) {
      return;
    }

    postNewNote({ book_id: id, content: value })
      .then(() => {
        console.log('Note created');
        noteRef.current.value = '';
      })
      .catch(err => console.log(err));
  }

  return (
    <DefaultPage>
      <CenteredContainer>
        <BookPageLayout>
          <BookInfo>
            <NewNoteContainer>
              <TextArea ref={noteRef} />
              <Button onClick={createNote}>Save</Button>
            </NewNoteContainer>
            <NotesContainer>
              {book.notes
                ? book.notes.map(note => (
                    <Note key={note.id} content={note.content} />
                  ))
                : null}
            </NotesContainer>
          </BookInfo>
        </BookPageLayout>
      </CenteredContainer>
    </DefaultPage>
  );
}

export default Book;
