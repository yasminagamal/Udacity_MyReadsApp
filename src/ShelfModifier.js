import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class ShelfModifier extends Component {
    state = {
        books: [],
        shelfName: ''
    }

    APIupdate = (book, shelf) => {
        BooksAPI.update(book, shelf).then(BooksAPI.getAll().then((book) => this.setState({
            books: book,
        })));
    };
    render() {
        return (
            <div books={this.props.books}>
                <div>
                    {this.props.books.map((book) => (<select onChange={(event) => this.APIupdate(book, event.target.value)}>
                        <option value="none">Select Shelf</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                    </select>))}
                    
                </div>
            </div>

        )
    }

}

export default ShelfModifier;
