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
      note: bookEdit.note
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

  onNoteChange = (evt) => {
    this.setState({
      note: evt.target.value
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    const { author, name, year, isbn, note } = this.state;
    this.props.onItemSaved(author, name, year, isbn, note, isbn);
    this.setState({
      author: '',
      name: '',
      year: '',
      isbn: '',
      note: ''
    });
  };

  onCancel = () => {
    this.props.onItemCancelSaved();
    this.setState({
      author: '',
      name: '',
      year: '',
      isbn: '',
      note: ''
    });
  }

  render() {
    return (
      <form className='book-details'
        onSubmit={this.onSubmit} >
        <h4>Информация о книге</h4>
        <div className='book-details__wrap d-flex'>
          <input type='text'
            className='form-control book-details__input'
            onChange={this.onAuthorChange}
            value={this.state.author} />
          <input type='text'
            className='form-control book-details__name'
            onChange={this.onNameChange}
            value={this.state.name} />
          <input type='text'
            className='form-control book-details__input'
            onChange={this.onYearChange}
            value={this.state.year} />
          <input type='text'
            className='form-control book-details__input'
            onChange={this.onIsbnChange}
            value={this.state.isbn} />
          <textarea className='form-control book-details__textarea'
            onChange={this.onNoteChange}
            value={this.state.note} />
        </div>
        <div className='book-details__wrap-btn d-flex'>
          <button className='btn btn-outline-secondary book-details__btn'>
            Сохранить
          </button>
          <button className='btn btn-outline-secondary book-details__btn'
            onClick={this.onCancel}>
            Отменить
          </button>
        </div>
      </form>
    );
  }
}
