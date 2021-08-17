import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

import BookShelf from './BookShelf'
import SearchPage from './SearchPage'



class App extends React.Component {
  state = {
    books: [],
    searchResults: []
  }

  debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  componentDidMount(){
    this.getAllBooks();
  }

  getAllBooks = () =>{
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(()=>({
        books
      }))
    })
  }
  
  searchBooks = this.debounce((book, limit) => {
    BooksAPI.search(book, limit)
    .then((searchResults)=>{
        this.setState(()=>({
          searchResults
        }))
    })
  }, 600);

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(()=>{
        this.getAllBooks();
    })
  }
  
  render(){
    return(
      <div className="list-books">
      
      	<div className="list-books-title">
      	  <h1>MyReads</h1>
      	</div>
        
        <Route exact path='/' >
          <BookShelf books={this.state.books} onUpdateBooks={this.updateBooks} />
        </Route>

		    <Route path='/search' render={({ history })=>(
          <SearchPage onSearchBooks={this.searchBooks} searchresults={this.state.searchResults} onUpdateBooks={this.updateBooks} />
        )}/>

      </div>
    )
  }

}

export default App