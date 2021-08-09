import React from 'react'


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
                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks})`}}></div>
                   <div className="book-shelf-changer">
                     <select>
                       <option value="move" disabled>Move to...</option>
                       <option value="currentlyReading">Currently Reading</option>
                       <option value="wantToRead">Want to Read</option>
                       <option value="read">Read</option>
                       <option value="none">None</option>
                     </select>
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