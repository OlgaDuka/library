import React, { Component } from 'react';

import './book-add-form.css';

export default class BookAddForm extends Component {
  constructor() {
    super();

    this.state={
      author: '',
      name: '',
      year: '',
      isbn: '',
      isValid: true,
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
    const validIsbn=/['0-9','-']/;
    const validYear=/['0-9']/;
    const { author, name, year, isbn } = this.state;
    if ((validIsbn.test(isbn)) && (validYear.test(year)) && (year.length === 4)) {
      this.props.onItemAdded(author, name, year, isbn);
      this.setState({
        author: '',
        name: '',
        year: '',
        isbn: '',
        isValid: true
      });
    } else {
      this.setState({isValid: false});
    }
  };

  render() {
    const { author, name, year, isbn, isValid } = this.state;
    return (
      <form className='book-add-form d-flex'
        onSubmit={this.onSubmit}>
        <h4>Заполните поля формы, чтобы добавить книгу</h4>
        <div className='book-add-form__wrap d-flex'>
          <input type='text'
            className='form-control book-add-form__input'
            onChange={this.onAuthorChange}
            placeholder='Автор'
            value={author}
            required />
          <input type='text'
            className='form-control book-add-form__name'
            onChange={this.onNameChange}
            placeholder='Наименование'
            value={name}
            required />
          <input type='text'
            className='form-control book-add-form__input'
            onChange={this.onYearChange}
            placeholder='Год издания'
            value={year}
            required />
          <input type='text'
            className='form-control book-add-form__input'
            onChange={this.onIsbnChange}
            placeholder='ISBN'
            value={isbn}
            required />
        </div>
        <button className='btn btn-outline-secondary book-add-form__btn'>
            Добавить книгу
        </button>
        {isValid ? null: <h5 className='book-add-form__errortext'>
          Код ISBN или Год издания заполнены неправильно. Исправьте и попробуйте снова.</h5>}
      </form>
    );
  }
}
