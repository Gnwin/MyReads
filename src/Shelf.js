import React from 'react'
import Book from './Book'


class Shelf extends React.Component{

  render(){
    const name = this.props.shelf;
    const books = this.props.content;
    const updateShelf = this.props.updatebookshelf;
    
    return(
    
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map((book)=>(
		        <Book key={book.id} bookItem={book} thumbnail={book.imageLinks.thumbnail} title={book.title} author={book.authors} updateshelf={updateShelf}  />
          ))}
          </ol>
        </div>
      </div>

    )
  }

}


export default Shelf