import React, { Component } from 'react';

import Header from '../header';
import SearchPanel from '../search-panel';
import BookAddForm from '../book-add-form';
import BookList from '../book-list';

import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      bookData: [
        this.createBookItem('Макс Фрай', 'Мастер ветров и закатов', 2014, '978-5-17-087268-8'),
        this.createBookItem('Пауло Коэльо', 'Манускрипт, найденный в Акко', 2012, '978-5-17-077619-1'),
        this.createBookItem('Вера Полозкова', 'Непоэмание', 2011, '978-5-904584-61-0'),
        this.createBookItem('Франц Кафка', 'Америка. Процесс', 1991, '5-250-01696-0')
      ],
      term: ''
    };
  }

  createBookItem = (author, name, year, isbn) => {
    return {
      author,
      name,
      year,
      id: isbn,
    };
  };

  addItem = (author, name, year, isbn) => {
    const newItem = this.createBookItem(author, name, year, isbn);

    this.setState(({ bookData }) => {
      const newArray = [
        ...bookData,
        newItem
      ];

      return {
        bookData: newArray
      }
    });
  };

  deletedItem = (id) => {
    this.setState(({ bookData }) => {
      const index = bookData.findIndex((el) => el.id === id);

      const newArray = [
        ...bookData.slice(0, index),
        ...bookData.slice(index + 1)
      ];

      return {
        bookData: newArray
      }
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  search = (books, term) => {
    if (term.length === 0) {
      return books;
    }

    return books.filter((el) => {
      return el.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  render() {
    const { bookData, term } = this.state;
    const visibleItems = this.search(bookData, term);
    const bookCount = visibleItems.length;
    return (
      <div className='app__content'>
        <Header />
        <SearchPanel className='search__panel'
          book={bookCount}
          onSearchChange={ this.onSearchChange } />
        <BookList
          books = { visibleItems }
          onDeleted={ this.deletedItem } />
        <BookAddForm
          onItemAdded={this.addItem} />
      </div>
    )
  };
}
