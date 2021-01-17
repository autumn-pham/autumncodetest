import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  state = {
    title: '',
    author: '',
    img: '',
    factoid: ''
  }
  handleChange = event => {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = event => {
    event.preventDefault()
    axios
    .post('/books', this.state)
    .then(response =>
      this.setState(
        {
          books: response.data,
          title: '',
          author: '',
          img: '',
          factoid: ''
         }
      )
    )
  }
  componentDidMount = () => {
    axios.get('http://localhost:4000/books/').then(response => {
      this.setState({
        books: response.data
      })
    })
  }
  render() {
    return (
      <div className="form">
        <hr/>
        <form>
          <fieldset>
            <legend>Add a Book</legend>
            <label for="title">TITLE</label>
            <input type="text" name="title" id="title"/><br/>
            <label for="author">AUTHOR</label>
            <input type="text" name="author" id="author"/><br/>
            <label for="img">COVER IMAGE</label>
            <input type="text" name="img" id="img"/><br/>
            <label for="factoid">FACT</label>
            <input type="text" name="factoid" id="factoid"/><br/>
            <input type="submit" value="SUBMIT" class="add-btn" />
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;
