import React, { Component } from 'react'
import './App.css'

class Book extends Component {

    render() {

        return (
            <div>
                <div className="book">
                    <div className="book-top">
                        {this.props.image === ''? (<div className="book-cover" style={{ width: 128, height: 193}}></div>)
                        :(<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.image}")` }}></div>)
                        
                        }
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.authors.map((author) => <p key={author}>{author}</p>)}</div>
                </div>
            </div>
        )

    }

}

export default Book;
