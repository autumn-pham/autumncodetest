import React from 'react';
import axios from 'axios';

class Card extends React.Component {
  state = {books: []}

  componentDidMount = () => {
    axios.get('http://localhost:4000/books/').then(response => {
      this.setState({
        books: response.data
      })
    })
  }

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
          </div>
          </div>
      })}

      </div>
    )
  }
}

export default Card;
