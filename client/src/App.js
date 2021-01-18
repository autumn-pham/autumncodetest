import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import GoogleBook from './components/GoogleBook';

class App extends React.Component {
  state = {
    books: [],
    currentBook: {},
    currentIndex: 0,
    googleBook: {},
    name: '',
    displayDetailFields: false
  }

  componentDidMount = () => {
    axios
    .get('https://autumnbooks.herokuapp.com/books')
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
    axios.delete('https://autumnbooks.herokuapp.com/books/' + event.target.value).then(response => {
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
    axios.put('https://autumnbooks.herokuapp.com/books/' + id, this.state).then(response => {
      this.setState({
        books: response.data
      })
    })
  }

  nextBook = () => {
  if (this.state.currentIndex < this.state.books.length) {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      currentBook: this.state.books[this.state.currentIndex]
    }))
  } else {
    this.setState(prevState => ({
      currentBook: this.state.books[0]
    }))
  }
   // console.log(this.state.books)
 }

 // search Google Books API

 searchBook = (event) => {
  event.preventDefault();
    event.target.reset()
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.name + '&key=AIzaSyB%20AZFHPTcUSvMx_Gx5Cd5tcQLP2c72htwA').then(
        (data) => {
          // console.log(data.data.items[0].volumeInfo)
            this.setState(
              {
                googleBook: data.data.items[0].volumeInfo,
                displayDetailFields: true
              }
            )
          }
      )
  }

  changeName = (event) => {
      this.setState(
            {
              name: event.target.value
            }
      )
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
        <hr />
        <GoogleBook
          googleBook={this.state.googleBook}
          displayDetailFields={this.state.displayDetailFields}
          onSearchBook={this.searchBook}
          onChangeName={this.changeName}
        />
      </div>
    )
  }
}

export default App;
