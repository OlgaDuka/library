import React, { Component } from 'react';

import Header from '../header';
import BookDetails from '../book-details';
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
      ]
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

  render() {
    return (
      <div className='app__content'>
        <Header />
        <BookList />
        <BookDetails />
      </div>
    )
  };
}
