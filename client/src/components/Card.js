import React from 'react';
import axios from 'axios';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // books: []
      books: [],
      currentBook: {},
      currentIndex: 0
    }

    this.nextBook = this.nextBook.bind(this)
  }


  componentDidMount = () => {
    axios
    .get('http://localhost:4000/books')
    .then(response => {
      this.setState({
        books: response.data,
        currentBook: response.data[0]
      })
    })
    .catch(function(error){
      console.log(error);
    })
  }

  // componentDidMount = () => {
  //   axios
  //   .get('http://localhost:4000/books')
  //   .then(response => {
  //     this.setState({
  //       books: response.data
  //     })
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   })
  // }



  deleteBook = (event) => {
    axios.delete('http://localhost:4000/books/' + event.target.value).then(response => {
      this.setState({
        books: response.data
      })
    })
    .catch(function(error){
      console.log(error);
    })
  }

  updateBook = (event) => {
    event.preventDefault();
    const id = event.target.id
    axios.put('http://localhost:4000/books/' + id, this.state).then(response => {
      this.setState({
        books: response.data
      })
    })
  }

  nextBook = () => {
   this.setState({
     currentIndex: this.currentIndex + 1,
     currentBook: this.state.books[this.state.currentIndex]
   })
 }

  render() {
    return (
      <div className="card text-center" key={this.state.currentBook._id}>
          <img src={this.state.currentBook.img} className="card-img-top" alt="book cover" />
          <div className="card-body">
            <h4>{this.state.currentBook.title}</h4>
            <h5>{this.state.currentBook.author}</h5>
            <p className="card-text">{this.state.currentBook.factoid}</p>
            <button className="btn btn-danger" value={this.state.currentBook._id} onClick={this.deleteBook} type="submit" name="action">
              DELETE
            </button>
            <button className="btn btn-primary" onClick={this.nextBook}>Next</button>
          </div>
        </div>

    // <div className="card-columns">
    // { this.state.books.map(book => {
    //   return <div className="card text-center" key={book._id}>
    //     <img src={book.img} className="card-img-top" alt="book cover" />
    //     <div className="card-body">
    //       <h4>{book.title}</h4>
    //       <h5>{book.author}</h5>
    //       <p className="card-text">{book.factoid}</p>
    //       <button className="btn btn-danger delete-btn" value={book._id} onClick={this.deleteBook} type="submit" name="action">
    //         DELETE
    //         </button>
    //     </div>
    //     </div>
    // })}
    // </div>
    )
  }
}

export default Card;
