import React from 'react'
import MoveItem from './MoveItem'


class WantToRead extends React.Component {
  state = {
    wantToRead: [],
    title: 'Want To Read'
  }
  
  
  render(){
    const books2 = this.props.wantToRead;
    
    return(

      <div className="bookshelf">
      <h2 className="bookshelf-title">{this.state.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
           {books2.map((book)=>(
             <li key={book.id}>
               <div className="book">
                 <div className="book-top">
                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                   <div className="book-shelf-changer">
                     <MoveItem name={this.state.title} />
                   </div>
                 </div>
                 <div className="book-title">{book.title}</div>
                 <div className="book-authors">{book.authors}</div>
               </div>
             </li>
           ))}
         </ol>
       </div>
       </div>

    )
  }
}


export default WantToRead