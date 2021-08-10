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


export default Read