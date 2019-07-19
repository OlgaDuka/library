import React, { Component } from 'react';

import './book-details.css';

export default class BookDetails extends Component {
  constructor() {
    super();

    this.state={
      author: '',
      name: '',
      year: 2000,
      id: '978-5-'
    };
  }

  render() {
    return (
      <form className='book-details d-flex'
        onSubmit={this.onSubmit}>
        <h4>Заполните поля формы, чтобы добавить книгу</h4>
        <div className='book-details__wrap d-flex'>
          <input type='text'
            className='form-control book-details__input'
            placeholder='Author'
            value={this.state.author} />
          <input type='text'
            className='form-control book-details__name'
            placeholder='Name'
            value={this.state.name} />
          <input type='number'
            className='form-control book-details__input'
            placeholder='Year'
            value={this.state.year} />
          <input type='text'
            className='form-control book-details__input'
            placeholder='ISBN'
            value={this.state.id} />
        </div>
        <button className='btn btn-outline-secondary book-details__btn'>
            Добавить книгу
        </button>
      </form>
    );
  }
}
