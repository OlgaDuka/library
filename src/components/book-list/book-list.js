import React from 'react';
import BookListItem from '../book-list-item'

import './book-list.css';

const BookList = ({books, onRead, onEdit, onDeleted}) => {
  const elements = books.map((item) => {
    const { isbn, ...itemProps } = item;

    return (
      <li key={ isbn } className="list-group-item">
        <BookListItem { ...itemProps }
        onRead={() => onRead(isbn)}
        onEdit={() => onEdit(isbn)}
        onDeleted={() => onDeleted(isbn)} />
      </li>
    );
  });

  return (
    <ul className="list-group book-list">
      { elements }
    </ul>
  );
};

export default BookList;
