import React from 'react';
import BookListItem from '../book-list-item'

import './book-list.css';

const BookList = ({books, onDeleted}) => {
  const elements = books.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={ id } className="list-group-item">
        <BookListItem { ...itemProps }
        onDeleted={() => onDeleted(id)} />
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
