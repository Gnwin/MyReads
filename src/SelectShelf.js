import React from 'react'
import PropTypes from 'prop-types'


class SelectShelf extends React.Component {
  static propTypes = {
    bookobj: PropTypes.object.isRequired,
    updatebook: PropTypes.func.isRequired
  }
  
  changeShelf = (bookObject, value) => {
    this.props.updatebook(bookObject, value);
  }
  
  render(){

    const book = this.props.bookobj;
    
    return(
      <select value={book.shelf ? book.shelf : 'none' } onChange={(e)=>this.changeShelf(book, e.target.value)}>
        <option value="move" disabled >Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
		    <option value="none" >None</option>
      </select>
    )
  }

}

export default SelectShelf