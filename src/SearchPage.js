import React from 'react'
import { Link } from 'react-router-dom'
import MoveItem from './MoveItem'


class SearchPage extends React.Component {
  state = {
    query: "",
    limit: 20
  }


  updateQuery = (query) => {
    this.setState(()=>({
      query: query.trim()
    }))
  }

  clearQuery = () => {
    this.updateQuery('');
  }
  
  render(){

    const { query, limit } = this.state;
    
    this.props.onSearchBooks(query, limit);
    
    const allBooks = this.props.allBooks1;
    
    //const allBooks = result;
    
    console.log(typeof allBooks);
    
    const showingBooks = query === '' ? [] :  allBooks;
    
    console.log(showingBooks);
    
    return(
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/' >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={query}
                  onChange={(event)=> this.updateQuery(event.target.value)}
                />

              </div>
            </div>

            <div className="search-books-results">

{/*{showingBooks.length !== limit && (
              <div className='showing-books'>
                <span>Now Showing {showingBooks.length} of {limit}</span>
			    {/*<button onClick={this.clearQuery}>Show all</button>*
             </div>)}*/}
			
              <ol className="books-grid">

				{showingBooks.map((book)=>(
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                        <div className="book-shelf-changer">
                          <MoveItem name={this.state.title} />
                        </div>
                      </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                    </div>
                  </li>
                ))}
		      </ol>
              
            </div>
          </div>
    )
  }
}

export default SearchPage