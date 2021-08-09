import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

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
      <div>
        Books
      	<currentlyReading/>
      	<wantToRead/>
      	<Read/>
      	<FindBooks/>
      </div>
    )
  }

}

export default App