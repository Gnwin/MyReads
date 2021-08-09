import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import BookShelf from './BookShelf'



class App extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount(){
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(()=>({
        books
      }))
    })
  }
  
  
  
  render(){
    return(
      <div className="list-books">
      
      	<div className="list-books-title">
      	  <h1>MyReads</h1>
      	</div>
      
        <BookShelf books={this.state.books} />

		<div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      
      </div>
    )
  }

}

export default App