import React from 'react'
import { Link } from 'react-router-dom'

import Shelf from './Shelf'



class BookShelf extends React.Component {
  
  state = {
    shelfNames: ["currentlyReading", "wantToRead", "read"]
  }
  
  addBooks = items => {
    const shelfs = this.state.shelfNames.map((name) => {
      const shelf = items.filter(item =>item.shelf === name);
      return shelf;
    })
    return shelfs;
  }
  
  createShelf = (shelf, currentShelfNames) => {
    this.setState((currentShelfNames)=({
      shelfNames: [...currentShelfNames.shelfNames, shelf]
    }))
  }
  
  render(){
    const { books, updateBookShelf } = this.props;
    
    return(
      
      <div className="list-books-content">
        <div>
        {this.state.shelfNames.map((name, index)=>(
          <Shelf key={name} shelf={name} content={this.addBooks(books)[index]} updatebookshelf={updateBookShelf} />
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