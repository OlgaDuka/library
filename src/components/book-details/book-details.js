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
      <form className='book-details d-flex'>
        <input type='text'
          className='form-control'
          placeholder='Author'
          value={this.state.author} />
        <input type='text'
          className='form-control'
          placeholder='Name'
          value={this.state.name} />
        <input type='number'
          className='form-control'
          placeholder='Year'
          value={this.state.year} />
        <input type='text'
          className='form-control'
          placeholder='ISBN'
          value={this.state.id} />
      </form>
    );
  }
}
