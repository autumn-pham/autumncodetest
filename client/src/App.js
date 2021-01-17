import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    books: [],
    currentBook: {},
    currentIndex: 0
  }

  componentDidMount = () => {
    axios
    .get('http://localhost:4000/books')
    .then(response => {
      this.setState({
        books: response.data,
        currentBook: response.data[0]
      })
      // console.log(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
  }

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
   this.setState(prevState => ({
     currentIndex: prevState.currentIndex + 1,
     currentBook: this.state.books[this.state.currentIndex]
   }))
   // console.log(this.state.books)
 }

  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <Form />
        <hr />
        <Card
          books={this.state.books}
          currentBook={this.state.currentBook}
          onNextBook={this.nextBook}
          onDelete={this.deleteBook}
        />
      </div>
    )
  }
}

export default App;
