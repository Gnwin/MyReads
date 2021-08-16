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
  
  searchBooks = (book, limit) => {
    BooksAPI.search(book, limit)
    .then((allBooks)=>{
      this.setState(()=>({
        allBooks
      }))
    })
  }
  
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
        
        <Route exact path='/' render={()=>(
          <BookShelf books={this.state.books} onUpdateBooks={this.updateBooks} />
        )} />

		
		    <Route path='/search' render={({ history })=>(
          <SearchPage onSearchBooks={this.searchBooks} searchresults={this.state.searchResults} onUpdateBooks={this.updateBooks} />
        )}/>

      </div>
    )
  }

}

export default App