import React from 'react'

import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'



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
    const { books } = this.props
    
    return(
      <div>
    
		<CurrentlyReading currentlyReading={this.addBooks(books)[0]}  />
      	<WantToRead wantToRead={this.addBooks(books)[1]}/>
      	<Read read={this.addBooks(books)[2]}/>

       <ol>
         {books.map((book)=>(
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
			   <div>{book.subtitle}</div>
               <div>{book.shelf}</div>
             </div>
           </li>
         ))}
       </ol>
       
      </div>
    )
  }
}


export default BookShelf