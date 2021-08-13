import React from 'react'
//import * as BooksAPI from './BooksAPI'


class MoveItem extends React.Component {
  state = {
    //values: ['move', 'currentlyReading', 'wantToRead', 'read', 'none'],
    //book: "",
    //value: ""
  }
  
    
  changeRank = (bookkObbjj, valuee) => {
    console.log(valuee);
    if (valuee === 'none' || valuee === 'move' ){
      return;
    }
    //this.setState(()=>({
      //value: valuee
    //}))
    //console.log(this.state.value);
    console.log(bookkObbjj, valuee);
    this.props.uiouio(bookkObbjj, valuee);
  }
  
  render(){
    
    const shelfRank = this.state.value;
    const bookk = this.props.bookcomp;
    
    //console.log(this.props.value);
    
    return(
      <select value={shelfRank} onChange={(e)=>this.changeRank(bookk, e.target.value)}>
        <option value="move" disabled >Move to...</option>
		<option value="none" >None</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
      </select>
    )
  }
}

export default MoveItem