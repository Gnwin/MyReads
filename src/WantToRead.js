import React from 'react'


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
               {book}
             ))}
        </ol>
      </div>
      </div>

    )
  }
}


export default WantToRead