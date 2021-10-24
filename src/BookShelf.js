import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';

//Search page

class BookShelf extends Component {
    state =
        {
            books: [],
            userinput: ''
        }

    userInput = (input) => { this.setState(() => ({ userinput: input })) };

    APIupdate = (book, shelf) => {
        (<div>Book Successfully Added To Your List!</div>)
        BooksAPI.update(book, shelf).then(BooksAPI.getAll().then((book) => this.setState({
            books: book,
        })));
    };

    handleOnInputChange = (event) => {
        const input = event.target.value;
        this.setState({ userinput: input })

        input !== '' ?
            BooksAPI.search(input).then((books) => {
                books.hasOwnProperty('error')
                    ? this.setState(() => ({ books: [] }))
                    : this.setState(() => ({ books: books }))
            })
            : this.setState(() => ({ books: [] }))
    }

    componentDidMount() {
        BooksAPI.getAll().then((book) => this.setState({ books: book }));
    }

    render() {

        /*const filterShelf = this.state.books !== undefined || !this.state.books.isEmpty()
            ? this.state.books.filter((book) => (book.title.toLowerCase().includes(this.state.userinput.toLowerCase())))
            : null*/
        const shelfName = (name) => name === 'wantToRead'
            ? 'Want To Read'
            : name === 'currentlyReading'
                ? 'Currently Reading'
                : name === 'read'
                    ? 'Read'
                    : 'Not yet on a shelf'


        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/"> <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> </Link>

                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search for books here" value={this.state.userinput} onChange={this.handleOnInputChange} />
                        </div>
                    </div>
                </div>

                {'before book loop', console.log(this.state.books)}
                <div className="search-books-results">
                    {this.state.books.length === 0 && this.state.userinput !== ''
                        ? (
                            <div>
                                <h1>No results found.</h1>
                            </div>)
                        : this.state.userinput === ''
                            ? (
                                <div>
                                    <h1>Please type in your search.</h1>
                                </div>)
                            : this.state.books.map((book) => (
                                <div className="bookshelf-books" key={book.id ? book.id : null}>
                                    <ol className="books-grid">
                                        <li>
                                            <Book title={book.title ? book.title : ''} authors={book.authors ? book.authors : []} image={book.imageLinks ? book.imageLinks.smallThumbnail : ''} />
                                        </li>
                                    </ol>
                                    <div>
                                        <h3>{shelfName(book.shelf)}</h3>
                                        <h6>Add Book To:</h6>
                                        <select value={book.shelf} onChange={(event) => this.APIupdate(book, event.target.value)}>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                        </select>
                                    </div>
                                </div>
                            )
                            )
                    }</div>
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


/* <div className="search-books-results">
                    {filterShelf === null ? <p> Please type in your search</p> :
                        filterShelf.length === 0 ? <p>No books found</p>
                            : filterShelf.map((book) =>
                                <div className="bookshelf-books" key={book.title}>
                                    <ol className="books-grid">
                                        <li key={book.title}>
                                            <Book title={book.title} authors={book.authors} />

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
                */