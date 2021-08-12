import React from 'react'

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
    for (let i = 0; i < this.state.shelfNames.length; i++){
      const shelf = items.filter(item =>item.shelf === this.state.shelfNames[i]);
      shelfs.push(shelf);
    }
    return shelfs;
  }
  
  render(){
    const { books } = this.props;
    
    return(
      
      <div className="list-books-content">
        <div>
        {this.state.shelfNames.map((name, index)=>(
          <Shelf key={name} shelf={name} content={this.addBooks(books)[index]} />
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