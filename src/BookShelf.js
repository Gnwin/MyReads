import { string } from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import Shelf from './Shelf'



class BookShelf extends React.Component {
  state = {
    shelfNames: ["Currently Reading", "Want To Read", "Read"]
  }
  
  addBooks = items => {
    return this.convertToPascalCase().map((name) => {
      const shelf = items.filter(item =>item.shelf === name);
      return shelf;
    })
  }

  convertToPascalCase = () => {
    return this.state.shelfNames.map(word => {
      let splitShelfName = word.split(" ");
      splitShelfName[0] = splitShelfName[0].toLowerCase();
      splitShelfName = splitShelfName.join('');
      return splitShelfName;
    })
  }
  
  createShelf = (currentShelfNames, shelf) => {
    this.setState((currentShelfNames)=({
      shelfNames: [...currentShelfNames.shelfNames, shelf]
    }))
  }
  
  render(){
    const books = this.props.books;
    const updateBookShelf = this.props.onUpdateBooks;
  

    return(
      
      <div className="list-books-content">
        <div>
        {this.state.shelfNames.map((name, index)=>(
          <Shelf 
            key={name} 
            shelf={name} 
            content={this.addBooks(books)[index]} 
            updatebookshelf={updateBookShelf}
          />
		    ))}
        </div>

		    <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>

    )
  }
}


export default BookShelf