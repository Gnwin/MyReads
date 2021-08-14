import React from 'react'


class MoveItem extends React.Component {
  
  changeRank = (bookObject, value) => {
    console.log(value);
    if (value === 'none' || value === 'move' ){
      return;
    }
    console.log(bookObject, value);
    this.props.updatebook(bookObject, value);
  }
  
  render(){
    
    const book = this.props.bookobj;
    
    return(
      <select value={book.shelf} onChange={(e)=>this.changeRank(book, e.target.value)}>
        <option value="move" disabled >Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
		    <option value="none" >None</option>
      </select>
    )
  }

}

export default MoveItem