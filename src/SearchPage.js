import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'


class SearchPage extends React.Component {
  state = {
    query: "",
    limit: 10
  }

  updateQuery = (query) => {
    this.setState(()=>({
      query: query.trim()
    }))
    this.props.onSearchBooks(this.state.query, this.state.limit);
  }

  // changeRank = (bookObject, value) => {
  //   console.log(value);
  //   if (value === 'none' || value === 'move' ){
  //     return;
  //   }
  //   console.log(bookObject, value);
  //   this.props.onUpdateBooks(bookObject, value);
  // }
  
  clearQuery = () => {
    this.updateQuery('');
  }
  
  render(){
	
    const allBooks = this.props.allBooks1;
    const showingBooks = this.state.query === '' ? [] :  allBooks;
    const addBooksToShelf = this.props.onUpdateBooks;

    return(

      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/' >Close</Link>
          <div className="search-books-input-wrapper">
  
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e)=> this.updateQuery(e.target.value)}
            />

          </div>
        </div>

        <div className="search-books-results">
          {showingBooks.length !== 0 && (
            <div className='showing-books'>
              <span>Now Showing {showingBooks.length} results</span>
            </div>
          )}
			
          <ol className="books-grid">
				  {showingBooks.map((book)=>(
            <Book 
              key={book.id} 
              bookItem={book} 
              thumbnail={book.imageLinks.thumbnail} 
              title={book.title} 
              author={book.authors} 
              updateshelf={addBooksToShelf}
            />
          ))}
		      </ol>   
        </div>
      </div>

    )
  }
}

export default SearchPage