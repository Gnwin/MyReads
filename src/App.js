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
  }, 300);

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(()=>{
        this.getAllBooks();
    })
  }
  
  render(){

    const getBookIds = this.state.books.map(bk=>bk.id);

    let searchR = this.state.searchResults;
    if (!searchR) {
      searchR = [];
    }
    searchR = searchR.filter(fi=> Object.keys(fi).length === 21);
    const results = searchR.filter(commonIds=> getBookIds.includes(commonIds.id));
    const results1 = searchR.filter(diffIds=> !getBookIds.includes(diffIds.id));

    // const results = this.state.searchResults.filter(commonIds=> getBookIds.includes(commonIds.id));
    // const results1 = this.state.searchResults.filter(diffIds=> !getBookIds.includes(diffIds.id));

    for(let i=0; i<results.length; i++){
      if(getBookIds.includes(results[i].id)){
        const commonBooks = this.state.books.filter(bookItem => bookItem.id === results[i].id);
        for (let j = 0; j < commonBooks.length; j++){
          results[i].shelf = commonBooks[j].shelf;
        }
      }
    }


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
            searchresults={results1.concat(results)} 
            onUpdateBooks={this.updateBooks} />
        )}/>
      </div>

    )
  }

}

export default App