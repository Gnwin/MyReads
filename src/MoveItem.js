import React from 'react'
import * as BooksAPI from './BooksAPI'


class MoveItem extends React.Component {
  state = {
    values: ['move', 'currentlyReading', 'wantToRead', 'read', 'none'],
    value: "",
    caption: ""
  }
  
  //componentDidMount(){
    //BooksAPI.getAll()
    //.then((books)=>{
      //this.setState(()=>({
        //books
      //}))
    //})
  //}
    
  changeRank = (e) => {
    const curr_rank = e.target.value;
    this.setState(()=>({
      value: curr_rank
    }))
    //BooksAPI.update(this.props.title1, this.state.value)
    //.then((books)=>{
      //this.setState(()=>({
        //books
      //}))
   // })
  }
  
  render(){
    
    const shelfRank = this.props.shelfrank;
    const bookk = this.props.bookcomp;
    
    //console.log(this.props.value);
    
    return(
      <select value={this.state.value} >
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