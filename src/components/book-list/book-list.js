import React from 'react';
import BookListItem from '../book-list-item'

import './book-list.css';

const BookList = ({books, onEdit, onDeleted}) => {
  const elements = books.map((item) => {
    const { isbn, ...itemProps } = item;

    return (
      <li key={ isbn } className="list-group-item">
        <BookListItem { ...itemProps }
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
