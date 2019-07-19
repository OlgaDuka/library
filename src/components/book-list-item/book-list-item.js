import React from 'react';

import './book-list-item.css';

const BookListItem = ({author, name, onRead, onEdit, onDeleted}) => {
  return (
    <span className="book-list-item" >
      <span>
        {author}. "{name}."
      </span>
      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
              <i className="fa fa-trash-o"
              onClick={ onDeleted } />
      </button>
      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
              <i className="fa fa-pencil"
              onClick={ onEdit } />
      </button>
      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
              <i className="fa fa-book"
              onClick={ onRead } />
      </button>
    </span>
  );
};

export default BookListItem;
