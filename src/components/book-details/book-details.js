import React, { Component } from 'react';

import './book-details.css';

export default class BookDetails extends Component {
  constructor({bookEdit, id}) {
    super();

    this.state={
      author: bookEdit.author,
      name: bookEdit.name,
      year: bookEdit.year,
      isbn: id,
      note: bookEdit.note,
      isValid: true
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

  };

  onNoteChange = (evt) => {
    this.setState({
      note: evt.target.value
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    const validYear=/['0-9']/;
    const { author, name, year, isbn, note } = this.state;
    if ((validYear.test(year)) && (year.length === 4)) {
      this.props.onItemSaved(author, name, year, isbn, note, isbn);
      this.setState({
        author: '',
        name: '',
        year: '',
        isbn: '',
        note: '',
        isValid: true
      });
    } else {
      this.setState({isValid: false});
    }
  };

  onCancel = () => {
    this.props.onItemCancelSaved();
    this.setState({
      author: '',
      name: '',
      year: '',
      isbn: '',
      note: '',
      isValid: true
    });
  }

  render() {
    const { author, name, year, isbn, note, isValid } = this.state;
    return (
      <form className='book-details'
        onSubmit={this.onSubmit} >
        <h4>Информация о книге</h4>
        <div className='book-details__wrap d-flex'>
          <input type='text'
            className='form-control book-details__input'
            onChange={this.onAuthorChange}
            value={author} />
          <input type='text'
            className='form-control book-details__name'
            onChange={this.onNameChange}
            value={name} />
          <input type='text'
            className='form-control book-details__input'
            onChange={this.onYearChange}
            value={year} />
          <input type='text'
            className='form-control book-details__input'
            onChange={this.onIsbnChange}
            value={isbn} />
          <textarea className='form-control book-details__textarea'
            onChange={this.onNoteChange}
            value={note} />
        </div>
        <div className='book-details__wrap-btn d-flex'>
          <button className='btn btn-outline-secondary book-details__btn'>
            Сохранить
          </button>
          <button className='btn btn-outline-secondary book-details__btn'
            onClick={this.onCancel}>
            Отменить
          </button>
          {isValid ? null: <h5 className='book-details__errortext'>
            Поле Год издания заполнено неправильно. Исправьте и попробуйте снова.</h5>}
        </div>
      </form>
    );
  }
}
