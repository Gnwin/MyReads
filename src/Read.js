import React from 'react'
import MoveItem from './MoveItem'


class Read extends React.Component {
  state = {
    read: [],
    title: 'Read'
  }
  
  render(){
    const books3 = this.props.read;
    
    return(

      <div className="bookshelf">
      <h2 className="bookshelf-title">{this.state.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books3.map((book)=>(
               {book}
             ))}
        </ol>
      </div>
      </div>

    )
  }
}


export default Read