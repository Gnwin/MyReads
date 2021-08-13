import React from 'react'
import MoveItem from './MoveItem'


class Book extends React.Component {
  //state = {
    //category: ""
  //}
 
  
  
  //updateBooks = (book, shelf) => {
    //BooksAPI.update(book, shelf)
    //.then((books)=>{
      //this.setState(()=>({
        //books
      //}))
    //})
  //}
  
  //updateCategory=rank=>{
    //this.setState(()=>({
      //category: rank
    //}))
  //}
  
  render(){
    
    const image = this.props.pic;
    const title = this.props.caption;
    const author = this.props.writer;
    const category = this.props.rank;
    const bookObject = this.props.bookobj;
    
    
    return(
      <li >
	    <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${image})`}}></div>
              <div className="book-shelf-changer">
                <MoveItem shelfrank={category} title1={title} bookcomp={bookObject} />
              </div>
            </div>
          <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
       </div>
      </li>
    )
  }
}

export default Book