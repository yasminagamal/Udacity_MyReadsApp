import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book';
import BookShelf from './BookShelf';


class CurrentlyReading extends Component {
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
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            {this.state.books.filter(book => book.shelf === "currentlyReading").map((book) => <div>{console.log(book)}<Book title={book.title} authors={book.authors} image={book.imageLinks.thumbnail} /></div>)}
                        </li>
                    </ol>
                </div>
            </div>
        )
    }

}

export default CurrentlyReading;

//this.state.books.shelf = "wantToRead"
