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
        this.createBookItem('Макс Фрай', 'Мастер ветров и закатов', '2014', '978-5-17-087268-8'),
        this.createBookItem('Пауло Коэльо', 'Манускрипт, найденный в Акко', '2012', '978-5-17-077619-1'),
        this.createBookItem('Вера Полозкова', 'Непоэмание', '2011', '978-5-904584-61-0'),
        this.createBookItem('Франц Кафка', 'Америка. Процесс', '1991', '5-250-01696-0')
      ],
      term: '',
      id: '',
      isEdit: false
    };

    this.state.id = this.state.bookData[0].isbn;
  }

  createBookItem = (author, name, year, isbn) => {
    return {
      author,
      name,
      year,
      isbn,
      note: ''
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

  saveItem = (author, name, year, isbn, note, id) => {
    this.setState(({ bookData, isEdit }) => {
      const index = bookData.findIndex((el) => el.isbn === id);
      const oldItem = bookData[index];
      const newItem = {...oldItem,
                        author: author,
                        name: name,
                        year: year,
                        isbn: isbn,
                        note: note
                      };

      console.log(oldItem, newItem, isEdit);
      const newArray = [
        ...bookData.slice(0, index),
        newItem,
        ...bookData.slice(index + 1)
      ];
      console.log('Новый массив ', newArray);

      return {
        bookData: newArray,
        isEdit: false
      }
    });
  };

  cancelSaveItem = () => {
    this.setState({ isEdit: false })
  };

  editItem = (isbn) => {
    this.setState({ id: isbn, isEdit: true });
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

  onEdit = () => {
    this.setState({isEdit: true});
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
    const { bookData, term, id, isEdit } = this.state;
    const visibleItems = this.search(bookData, term);
    const bookCount = visibleItems.length;
    const index = bookData.findIndex((el) => el.isbn === id);
    const book = bookData[index];
    return (
      <div className='app__content'>
        <Header />
        <SearchPanel
          bookNum={bookCount}
          onSearchChange={ this.onSearchChange } />
        <BookList
          books={ visibleItems }
          onEdit={ this.editItem }
          onDeleted={ this.deletedItem } />
        {isEdit ? <BookDetails
          bookEdit={book}
          id={id}
          onItemSaved={this.saveItem}
          onItemCancelSaved={this.cancelSaveItem} /> : null}
        <BookAddForm
          onItemAdded={this.addItem} />
      </div>
    )
  };
}
