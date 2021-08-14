import React from 'react'
import { Link } from 'react-router-dom'

import Shelf from './Shelf'



class BookShelf extends React.Component {
  
  state = {
    shelfNames: ["currentlyReading", "wantToRead", "read"]
  }
  
  addBooks = items => {
    // const shelfs = [];
    // for (let i = 0; i < this.state.shelfNames.length; i++){
    //   const shelf = items.filter(item =>item.shelf === this.state.shelfNames[i]);
    //   shelfs.push(shelf);
    // }

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