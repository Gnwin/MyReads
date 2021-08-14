import React from 'react'
import MoveItem from './MoveItem'


class Book extends React.Component {
  
  render(){
    const image = this.props.pic;
    const title = this.props.caption;
    const author = this.props.writer;
    const category = this.props.rank;
    const bookObject = this.props.bookobj;
    const koio = this.props.weyer;
    
    return(
      <li >
	    <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${image})`}}></div>
              <div className="book-shelf-changer">
                <MoveItem shelfrank={category} title1={title} bookcomp={bookObject} uiouio={koio} />
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