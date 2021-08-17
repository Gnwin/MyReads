import React from 'react'
import SelectShelf from './SelectShelf'


class Book extends React.Component {
  
  render(){
    const bookCoverImg = this.props.thumbnail;
    const bookTitle = this.props.title;
    const bookAuthor = this.props.author;
    const bookObject = this.props.bookItem;
    const updateBook = this.props.updateshelf;
    
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${bookCoverImg})`}}></div>
              <div className="book-shelf-changer">
                <SelectShelf bookobj={bookObject} updatebook={updateBook} />
              </div>
          </div>
          <div className="book-title">{bookTitle}</div>
          <div className="book-authors">
            {Object.values(bookAuthor).map((writer)=>(
              <p key={writer} style={{margin: 0}}>{writer}.</p>
            ))}
          </div>
        </div>
      </li>
    )
  }

}

export default Book