import React from 'react'
import Book from './Book'


class Shelf extends React.Component{

  render(){
    const name = this.props.shelf;
    const bookss = this.props.content;
    const fhfhf = this.props.rankShelf;
    
    return(
    
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {bookss.map((book)=>(
		        <Book key={book.id} bookobj={book} pic={book.imageLinks.thumbnail} caption={book.title} writer={book.authors} rank={book.shelf} weyer={fhfhf}  />
          ))}
          </ol>
        </div>
      </div>

    )
  }

}


export default Shelf