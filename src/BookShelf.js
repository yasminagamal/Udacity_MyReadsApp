import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book';
import { Link } from 'react-router-dom';

//Search page

class BookShelf extends Component {
    state =
        {
            books: [],
            userinput: ''
        }

    userInput = (input) => { this.setState(() => ({ userinput: input })) };

    componentDidMount() {
        BooksAPI.getAll().then((book) => this.setState({ books: book }));
    }

    APIupdate = (book, shelf) => {
        BooksAPI.update(book, shelf).then(BooksAPI.getAll().then((book) => this.setState({
            books: book,
        })));
    };



    render() {

        const filterShelf = this.state.userinput !== ''
            ? this.state.books.filter((book) => (book.title.toLowerCase().includes(this.state.userinput.toLowerCase())))
            : null

        const shelfName = (name) => name === 'wantToRead'
            ? 'Want To Read'
            : name === 'currentlyReading'
                ? 'Currently Reading'
                : name === 'read'
                    ? 'Read'
                    : 'Not yet on a shelf'


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" exact> <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> </Link>
                    
                    <div className="search-books-input-wrapper">
                        { }
                        <input type="text" placeholder="Search by title or author" onChange={(event) => this.userInput(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    {filterShelf === null ? <p> Please type in your search</p> :
                        filterShelf.length === 0 ? <p>No books found</p>
                            : filterShelf.map((book) =>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        <li key={book.title}>
                                            <Book title={book.title} authors={book.authors} image={book.imageLinks.smallThumbnail} />

                                        </li>
                                    </ol>
                                    <div>
                                        <h3>{shelfName(book.shelf)}</h3>
                                        <h6>Change Shelf To:</h6>
                                        <select value={book.shelf} onChange={(event) => this.APIupdate(book, event.target.value)}>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                        </select>
                                    </div>
                                </div>)}
                </div>
            </div>


        )
    }

}

export default BookShelf;

/*<div userinput={this.props.userInput}>
                <p>this . props: {this.props.userInput} </p>
                {this.filterShelf.map((book) =>
                (<div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book title={book.title} authors={book.authors} image={book.imageLinks.smallThumbnail} />
                        </li>
                    </ol>
                    {console.log(book)}
                </div>))}

                {console.log(this.state.books)}
            </div> */