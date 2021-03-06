import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'


import BookShelf from './BookShelf'
import SearchPage from './SearchPage'

class App extends React.Component {
  state = {
    books: [],
    searchResults: []
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(()=>({
        books
      }))
    })
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
  
  searchBooks = this.debounce((book, limit) => {
    BooksAPI.search(book, limit)
    .then((searchResults)=>{
      const getBookIds = this.state.books.map(bk=>bk.id);
      if (!Array.isArray(searchResults)) {
        searchResults = [];
      }
      const results = searchResults.filter(commonIds=> getBookIds.includes(commonIds.id));
      const results1 = searchResults.filter(diffIds=> !getBookIds.includes(diffIds.id));

      for(let i=0; i<results.length; i++){
        if(getBookIds.includes(results[i].id)){
          const commonBooks = this.state.books.filter(bookItem => bookItem.id === results[i].id);
          for (let j = 0; j < commonBooks.length; j++){
            results[i].shelf = commonBooks[j].shelf;
          }
        }
      }

      this.setState(()=>({
        searchResults : results1.concat(results)
      }))
    })
  }, 300);

  updateBooks = (book, shelf) => {
    book.shelf = shelf;
    this.setState((oldState)=>({
      books: oldState.books.filter(b => b.id !== book.id).concat([ book ])
    }))
    BooksAPI.update(book, shelf)
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
          <SearchPage 
            onSearchBooks={this.searchBooks} 
            searchresults={this.state.searchResults} 
            onUpdateBooks={this.updateBooks} />
        )}/>
      </div>

    )
  }

}

export default App