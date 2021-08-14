import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'


class SearchPage extends React.Component {
  state = {
    query: "",
    limit: 20
  }


  updateQuery = (query) => {
    this.setState(()=>({
      query: query.trim()
    }))
    this.props.onSearchBooks(this.state.query, this.state.limit);
  }
  

  clearQuery = () => {
    this.updateQuery('');
  }
  
  render(){
	
    const allBooks = this.props.allBooks1;
    const showingBooks = this.state.query === '' ? [] :  allBooks;
    
    return(

      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/' >Close</Link>
          <div className="search-books-input-wrapper">
  
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event)=> this.updateQuery(event.target.value)}
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
              bookobj={book} 
              pic={book.imageLinks.thumbnail} 
              caption={book.title} 
              writer={book.authors} 
              rank={book.shelf}
            />
          ))}
		      </ol>   
        </div>
      </div>

    )
  }
}

export default SearchPage