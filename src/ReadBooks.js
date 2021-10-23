import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book';


class ReadBooks extends Component {
    state =
        {
            books: []
        }
    componentDidMount() {
        BooksAPI.getAll().then((book) => this.setState({ books: book }));
    }

    render() {
        return (
            <div>
                <h2 className="bookshelf-title">Read Books</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            {this.state.books.filter(book => book.shelf === "read").map((book) => <div>{console.log(book)}<Book title={book.title} authors={book.authors} image={book.imageLinks.thumbnail} /></div>)}
                        </li>
                    </ol>
                </div>
            </div>
        )
    }

}

export default ReadBooks;

//this.state.books.shelf = "wantToRead"
