import React from 'react'


class MoveItem extends React.Component {
  
  changeRank = (bookkObbjj, valuee) => {
    console.log(valuee);
    if (valuee === 'none' || valuee === 'move' ){
      return;
    }
    console.log(bookkObbjj, valuee);
    this.props.uiouio(bookkObbjj, valuee);
  }
  
  render(){
    
    const bookk = this.props.bookcomp;
    
    return(
      <select value={bookk.shelf} onChange={(e)=>this.changeRank(bookk, e.target.value)}>
        <option value="move" disabled >Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
		    <option value="none" >None</option>
      </select>
    )
  }

}

export default MoveItem