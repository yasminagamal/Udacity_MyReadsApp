import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book';


class WantToRead extends Component {
    state =
        {
            books: []
        }

    componentDidMount() {
        BooksAPI.getAll().then((book) => this.setState({
            books: book,
        }));
        console.log('mounted log: ', this.state);
    }

    APIupdate = (book, shelf) => {
        BooksAPI.update(book, shelf).then(BooksAPI.getAll().then((book) => this.setState({
            books: book,
        })));
    };

    render() {
        return (
            <div books={this.state.books}>
                <h2 className="bookshelf-title">Want to read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                            {this.state.books.filter(book => book.shelf === "wantToRead").map((book) =>
                                <li key={book.id}>
                                <Book title={book.title} authors={book.authors} image={book.imageLinks.thumbnail} shelf={book.shelf} />
                                <div>
                                    <h4>Change Shelf</h4>
                                    <select value={book.shelf} onChange={(event) => this.APIupdate(book, event.target.value)}>
                                        <option value="currentlyReading">Move to Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Move to Read</option>
                                    </select>
                                </div>
                                </li>)
                            }

                    </ol>
                </div><h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        
                            {this.state.books.filter(book => book.shelf === "currentlyReading").map((book) => <li key={book.id}>
                                <Book books={this.state.books} title={book.title} authors={book.authors} image={book.imageLinks.thumbnail} shelf={book.shelf} />
                                <div>
                                    <h4>Change Shelf</h4>
                                    <select value={book.shelf} onChange={(event) => this.APIupdate(book, event.target.value)}>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead" > Move to Want to Read</option>
                                        <option value="read" >Move to Read</option>
                                    </select>
                                </div>
                            </li>)}
                        
                    </ol>
                </div><h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                            {this.state.books.filter(book => book.shelf === "read").map((book) => <li key={book.id}>
                                <Book books={this.state.books} title={book.title} authors={book.authors} image={book.imageLinks.thumbnail} shelf={book.shelf} />
                                <div>
                                    <h4>Change Shelf</h4>
                                    <select value={book.shelf} onChange={(event) => this.APIupdate(book, event.target.value)}>
                                        <option value="currentlyReading">Move to Currently Reading</option>
                                        <option value="read" >Read</option>
                                        <option value="wantToRead">Move to Want to Read</option>
                                    </select>
                                </div>
                            </li>)}
                        
                    </ol>
                </div>
            </div>
        )
    }

}

export default WantToRead;

//this.state.books.shelf = "wantToRead"
