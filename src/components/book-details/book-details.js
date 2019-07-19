import React, { Component } from 'react';

import './book-details.css';

export default class BookDetails extends Component {
  constructor() {
    super();

    this.state={
      author: '',
      name: '',
      year: '',
      isbn: '',
      note: ''
    };
  }

  onAuthorChange = (evt) => {
    this.setState({
      author: evt.target.value
    });
  };

  onNameChange = (evt) => {
    this.setState({
      name: evt.target.value
    });
  };

  onYearChange = (evt) => {
    this.setState({
      year: evt.target.value
    });
  };

  onIsbnChange = (evt) => {
    this.setState({
      isbn: evt.target.value
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    const { author, name, year, isbn } = this.state;
    this.props.onItemAdded(author, name, year, isbn);
  };

  render() {
    return (
      <form className='book-details book-details__inactive'
        onSubmit={this.onSubmit}>
        <h4>Редактировать данные о книге</h4>
        <div className='book-details__wrap d-flex'>
          <input type='text'
            className='form-control book-details__input'
            value={this.state.author} />
          <input type='text'
            className='form-control book-details__name'
            value={this.state.name} />
          <input type='number'
            className='form-control book-details__input'
            value={this.state.year} />
          <input type='text'
            className='form-control book-details__input'
            value={this.state.isbn} />
          <textarea className='form-control book-details__textarea'
            value={this.state.note} />
        </div>
        <button className='btn btn-outline-secondary book-details__btn'>
            Сохранить
        </button>
      </form>
    );
  }
}
