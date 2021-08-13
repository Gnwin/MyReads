import React from 'react'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'



class BookShelf extends React.Component {
  state = {
    shelfNames: ["currentlyReading", "wantToRead", "read"]
  }
  
  createShelf = (shelf, currentShelfNames) => {
    this.setState((currentShelfNames)=({
      shelfNames: [...currentShelfNames.shelfNames, shelf]
    }))
  }
  
  //takes in the books object from the API
  addBooks = items => {
    const shelfs = [];
    console.log(items);
    for (let i = 0; i < this.state.shelfNames.length; i++){
      const shelf = items.filter(item =>item.shelf === this.state.shelfNames[i]);
      shelfs.push(shelf);
    }
    return shelfs;
  }
  
  changeRank = (e) => {
    const curr_rank = e.target.value;
    this.setState(()=>({
      value: curr_rank
    }))
    BooksAPI.update(this.props.title1, this.state.value)
    .then((books)=>{
      this.setState(()=>({
        books
      }))
    })
  }
  
  render(){
    const { books } = this.props;
    const updateShelfbook = this.props.updateShelf
    
    return(
      
      <div className="list-books-content">
        <div>
        {this.state.shelfNames.map((name, index)=>(
          <Shelf key={name} shelf={name} content={this.addBooks(books)[index]} rankShelf={updateShelfbook} />
		))}
        </div>

		<div className="open-search">
          <Link to='/search' >Add a book</Link>
        </div>
      </div>

    )
  }
}


export default BookShelf