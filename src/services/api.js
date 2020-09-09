import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllBooks = () => instance.get(`/b`);

export const getBookById = id => instance.get(`/b/${id}`);

export const postNewNote = note => instance.post(`/n`, note);
