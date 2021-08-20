import React from "react";
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'


class SearchPage extends React.Component {
  static propTypes = {
    onSearchBooks: PropTypes.func.isRequired,
    searchresults: PropTypes.array.isRequired,
    onUpdateBooks: PropTypes.func.isRequired
  }

  state = {
    query: "",
    limit: 20
  }

  updateQuery = (query) => {
    this.setState(()=>({
      query
    }))
    if (query.length < 2) return
    this.props.onSearchBooks(query);
  }

  clearQuery = (val) => {
    this.updateQuery(val);
  }
  
  render(){

    const searchResults = this.props.searchresults;
    const showingBooks = this.state.query === '' ? [] : searchResults;
    const addBooksToShelf = this.props.onUpdateBooks;

    return(

      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/' >Close</Link>
          <div className="search-books-input-wrapper">
  
            <input 
              type="text" 
              placeholder="Search by title or author"
              minLength={2}
              value={this.state.query}
              onChange={(e)=>this.updateQuery(e.target.value)}
            />

          </div>
        </div>

        <div className="search-books-results">
          {showingBooks.length !== 0 && (
            <div className='showing-books'>
              <span>Now Showing {showingBooks.length} of {this.state.limit} results</span>
            </div>
          )}
			
          <ol className="books-grid">
				  {showingBooks.map((book)=>(
            <Book 
              key={book.id} 
              bookItem={book} 
              thumbnail={book.imageLinks ? book.imageLinks.thumbnail : '/arrow-drop-down.svg' } 
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