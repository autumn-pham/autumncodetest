import React from 'react';
import axios from 'axios';

class Card extends React.Component {
  state = {
    books: [],
    // index: 0
  }

  componentDidMount = () => {
    axios.get('http://localhost:4000/books/').then(response => {
      this.setState({
        books: response.data
      })
    })
  }

  deleteBook = (event) => {
  axios.delete('http://localhost:4000/books' + event.target.value).then(
    (response) => {
      this.setState({
        books: response.data
      })
    })
  }
  //
  // nextCard() {
  //   let i = this.state.index;
  //   if (i < this.state.books.length - 1) {
  //     i++;
  //   }
  //   this.setState({ index: i })
  // }
  //
  // nextButton() {
  //
  //   if (this.state.index < this.state.books.length - 1) {
  //     return <button className="next-button" onClick={ event => this.nextCard()}>NEXT</button>
  //   }
  // }

  render() {
    return (
      <div className="card-columns">
      {this.state.books.map((book) =>{
        return <div className="card text-center">
          <img src={book.img} className="card-img-top" alt="book cover" />
          <div className="card-body">
            <h4>{book.title}</h4>
            <h5>{book.author}</h5>
            <p className="card-text">{book.factoid}</p>
            <button className="btn btn-danger delete-btn" value={book.id} onClick={this.deleteBook}>
              DELETE
              </button>
          </div>
          </div>
      })}

      </div>
    )
  }
}

export default Card;
