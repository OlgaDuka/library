import React, { Component } from 'react';

import './book-add-form.css';

export default class BookAddForm extends Component {
  constructor() {
    super();

    this.state={
      author: '',
      name: '',
      year: '',
      id: ''
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
      id: evt.target.value
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    const { author, name, year, id } = this.state;
    this.props.onItemAdded(author, name, year, id);
    this.setState({
      author: '',
      name: '',
      year: '',
      id: ''
    });
  };

  render() {
    return (
      <form className='book-add-form d-flex'
        onSubmit={this.onSubmit}>
        <h4>Заполните поля формы, чтобы добавить книгу</h4>
        <div className='book-add-form__wrap d-flex'>
          <input type='text'
            className='form-control book-add-form__input'
            onChange={this.onAuthorChange}
            placeholder='Author'
            value={this.state.author}
            required />
          <input type='text'
            className='form-control book-add-form__name'
            onChange={this.onNameChange}
            placeholder='Name'
            value={this.state.name}
            required />
          <input type='text'
            className='form-control book-add-form__input'
            onChange={this.onYearChange}
            placeholder='Year'
            value={this.state.year}
            required />
          <input type='text'
            className='form-control book-add-form__input'
            onChange={this.onIsbnChange}
            placeholder='ISBN'
            value={this.state.id}
            required />
        </div>
        <button className='btn btn-outline-secondary book-add-form__btn'>
            Добавить книгу
        </button>
      </form>
    );
  }
}
