import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  constructor() {
    super();

    this.state = {
      term: ''
    };
  }

  onSearchChange = (evt) => {
    const term = evt.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    const { book } = this.props;
    return (
      <div className='search-panel d-flex'>
        <input type='text'
              className='form-control search-panel__input'
              onChange={this.onSearchChange}
              placeholder='Введите текст для поиска'
              value={this.state.term} />
        <h4 className="search-panel__subtitle">Количество книг - {book}шт.</h4>
      </div>
    );
  };
}
