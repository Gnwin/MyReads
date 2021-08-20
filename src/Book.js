import React from 'react'
import SelectShelf from './SelectShelf'
import PropTypes from 'prop-types'


class Book extends React.Component {
  static propTypes = {
    bookItem: PropTypes.object.isRequired,
    thumbnail: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.array,
    updateshelf: PropTypes.func.isRequired
  }

  state = {
    unknownImg: '/arrow-drop-down.svg',
    unknownAuthor: ['Authors Unknown']
  }
  
  render(){
    
    const { unknownImg, unknownAuthor } = this.state;

    const bookCoverImg = this.props.thumbnail;

    const bookTitle = this.props.title;

    let bookAuthor = this.props.author;
    bookAuthor = bookAuthor ? bookAuthor : unknownAuthor;

    const bookObject = this.props.bookItem;
    const updateBook = this.props.updateshelf;
    
    
    return(
      <li>
        <div className="book">
          <div className="book-top">

            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${bookCoverImg ? bookCoverImg : unknownImg})`}}></div>

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