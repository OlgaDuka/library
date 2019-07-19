import React, { Component } from 'react';

import Header from '../header';
import SearchPanel from '../search-panel';
import BookAddForm from '../book-add-form';
import BookList from '../book-list';
import BookDetails from '../book-details';

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
      isbn,
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

  saveItem = (author, name, year, isbn, note) => {
    this.setState(({ bookData }) => {
      const index = bookData.findIndex((el) => el.isbn === isbn);
      const oldItem = bookData[index];
      const newItem = {...oldItem,
                        [author]: author,
                        [name]: name,
                        [year]: year,
                        [isbn]: isbn,
                        [note]: note
                      };

      const newArray = [
        ...bookData.slice(0, index),
        newItem,
        ...bookData.slice(index + 1)
      ];

      return {
        bookData: newArray
      }
    });
  };

  deletedItem = (isbn) => {
    this.setState(({ bookData }) => {
      const index = bookData.findIndex((el) => el.isbn === isbn);

      const newArray = [
        ...bookData.slice(0, index),
        ...bookData.slice(index + 1)
      ];

      return {
        bookData: newArray
      }
    });
  };

  showDetails = () => {

  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  search = (books, term) => {
    if (term.length === 0) {
      return books;
    }

    return books.filter((el) => {
      return (el.author.toLowerCase().indexOf(term.toLowerCase()) > -1) ||
             (el.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
    });
  };

  render() {
    const { bookData, term } = this.state;
    const visibleItems = this.search(bookData, term);
    const bookCount = visibleItems.length;
    return (
      <div className='app__content'>
        <Header />
        <SearchPanel
          book={bookCount}
          onSearchChange={ this.onSearchChange } />
        <BookList
          books = { visibleItems }
          onDeleted={ this.deletedItem }
          onShowDetail={ this.showDetail} />
        <BookDetails
          onItemDetails={this.detailsItem}/>
        <BookAddForm
          onItemAdded={this.addItem} />
      </div>
    )
  };
}
