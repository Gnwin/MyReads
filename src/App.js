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

    let getBookIds = this.state.books.map(bk=>bk.id);
    let results = this.state.searchResults.filter(commonIds=> getBookIds.includes(commonIds.id));
    let results1 = this.state.searchResults.filter(diffIds=> !getBookIds.includes(diffIds.id));

    for(let i=0; i<results.length; i++){
      if(getBookIds.includes(results[i].id)){
        let commonBooks = this.state.books.filter(bookItem => bookItem.id === results[i].id);
        for (let j = 0; j < commonBooks.length; j++){
          results[i].shelf = commonBooks[j].shelf;
        }
      }
    }

    let realSearchResults = results1.concat(results);

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
            searchresults={realSearchResults} 
            onUpdateBooks={this.updateBooks} 
            sortedbooks={this.state.books} />
        )}/>
      </div>
    )
  }

}

export default App