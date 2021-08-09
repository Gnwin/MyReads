import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'

import BookShelf from './BookShelf'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'



class App extends React.Component {
  state = {
    books: [
      {
        id: 1,
        name: 'The Order of the Phoenix',
        author: 'Harry Potter'
      },
      {
        id: 2,
        name: 'Wall Street Struggles',
        author: 'Peter Wigglesworth'
      }
    ]
  }
  
  //componentDidMount(){
    //BooksAPI.getAll()
    //.then((books)=>{
      //this.setState(()=>({
        //books
      //}))
    //})
  //}
  
  //console.log(this.state.books);
  
  render(){
    console.log(this.state.books);
    return(
      <div className="list-books">
      
      	<div className="list-books-title">
      	  <h1>MyReads</h1>
      	</div>
      
         <BookShelf books={this.state.books}>
      	  <CurrentlyReading/>
      	  <WantToRead/>
      	  <Read/>
      	</BookShelf>

      
      </div>
    )
  }

}

export default App