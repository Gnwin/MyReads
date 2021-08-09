import React from 'react'

import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'
import { Link } from 'react-router-dom'



class BookShelf extends React.Component {
  state = {
    shelfNames: ["currentlyReading", "wantToRead", "read"]
  }
  
  
  addBooks=items=>{
    const shelf1 = items.filter(item =>item.shelf === this.state.shelfNames[0]);
    const shelf2 = items.filter(item =>item.shelf === this.state.shelfNames[1]);
    const shelf3 = items.filter(item =>item.shelf === this.state.shelfNames[2]);
    return [shelf1, shelf2, shelf3];
  }
  
  render(){
    const { books } = this.props;
    
    return(
      
      <div className="list-books-content">
        <div>
		  <CurrentlyReading currentlyReading={this.addBooks(books)[0]} />
      	  <WantToRead wantToRead={this.addBooks(books)[1]} />
      	  <Read read={this.addBooks(books)[2]} />
        </div>

		<div className="open-search">
          <Link to='/search' >Add a book</Link>
        </div>
      </div>


    )
  }
}


export default BookShelf