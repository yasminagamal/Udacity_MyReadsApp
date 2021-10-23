import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf';
import { Route, Link } from 'react-router-dom';
import WantToRead from './WantToRead';

class MyReads extends React.Component {

    state = {
        books: [],
        userinput: ''
    }


    userInput = (input) => {
        this.setState(() => ({
            userinput: input
        }))
    };
    
    componentDidMount() {
        BooksAPI.getAll().then((book) => this.setState({ books: book }));
    }

    render() {
        return (
            <div className="app">
                <Route path="/" exact>
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div className="bookshelf">
                                <div>
                                    <WantToRead books={this.state.books}/>
                                </div></div></div>
                        <div className="open-search">

                            <Link to="/search">
                                <button>Add a book</button>
                            </Link>
                        </div>
                    </div>
                </Route>
                <Route path="/search" exact>
                    <BookShelf />
                    </Route>

            </div>
        )
    }


}

export default MyReads;

//                            