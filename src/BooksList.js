import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksList extends Component {
    state = { book: []}
    componentDidMount() {
        BooksAPI.getAll().then((book) => this.setState({ book: book}));
    }
    render() {
        return (
            <div>
                {this.state.book!==0? (this.state.book.map((book)=> (
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                    <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors.map((author) => <p>{author}</p>)}</div>
                            </div>
                            </div>
                            </li>
                            </ol>
                            </div>                    
                ) )): null}
                {console.log(this.state)}
                
                
            </div>
        )
    }

}

export default BooksList;

//{console.log(this.state)}
//{this.state.book[0]? (<div>{this.state.book[0].title}</div>) : null}