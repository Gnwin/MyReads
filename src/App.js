import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
//import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'
import SearchPage from './SearchPage'



class App extends React.Component {
  state = {
    books: [],
    allBooks: []
  }
  
  componentDidMount(){
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
  
  //changeRank = (e) => {
    //const curr_rank = e.target.value;
    //this.setState(()=>{(
      //value: curr_rank
    //)})
    //BooksAPI.update(this.props.title1, this.state.value)
    //.then((books)=>{
      //this.setState(()=>({
        //books
      //}))
    //})
  //}
  
  
  render(){
    return(
      <div className="list-books">
      
      	<div className="list-books-title">
      	  <h1>MyReads</h1>
      	</div>
        
        <Route exact path='/' render={()=>(
          <BookShelf books={this.state.books} />
        )} />

		
		<Route path='/search' render={({ history })=>(
          <SearchPage onSearchBooks={this.searchBooks} allBooks1={this.state.allBooks} 
        />
        )}/>

		
      </div>
    )
  }

}

export default App