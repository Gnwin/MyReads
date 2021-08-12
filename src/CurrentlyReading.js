import React from 'react'


class CurrentlyReading extends React.Component {
  state = {
    currentlyReading: [],
    title: 'Currently Reading'
  }
  
  //updateState = (cR)=> {
    //this.setState(()=>({
      //currentlyReading: cR
    //}))
  //}
  
  
  
  
  render(){
    const books1 = this.props.currentlyReading;
    

    
    return(

      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.state.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
             {books1.map((book)=>(
               {book}
             ))}
          </ol>
        </div>
      </div>

    )
  }
}


export default CurrentlyReading