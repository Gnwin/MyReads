import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Shelf from './Shelf'



class BookShelf extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBooks: PropTypes.func.isRequired
  }

  state = {
    shelfNames: ["Currently Reading", "Want To Read", "Read"]
  }
  
  addBooks = items => {
    return this.convertShelfNamesToPascalCase().map((name) => {
      return items.filter(item =>item.shelf === name);
    })
  }

  convertShelfNamesToPascalCase = () => {
    return this.state.shelfNames.map(word => {
      let splitShelfName = word.split(" ");
      splitShelfName[0] = splitShelfName[0].toLowerCase();
      splitShelfName = splitShelfName.join('');
      return splitShelfName;
    })
  }
  
  createShelf = (currentShelfNames, shelf) => {
    shelf = shelf.split(" ").map(item=>{
      return item.charAt(0).toUpperCase() + item.slice(1)
    }).join(' ');
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