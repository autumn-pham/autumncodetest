import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeNewTitle = this.onChangeNewTitle.bind(this);
    this.onChangeNewAuthor = this.onChangeNewAuthor.bind(this);
    this.onChangeNewImg = this.onChangeNewImg.bind(this);
    this.onChangeNewFactoid = this.onChangeNewFactoid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      author: '',
      img: '',
      factoid: ''
    }
  }

  onChangeNewTitle = (event) => {
  this.setState({
    title: event.target.value
  })
}

  onChangeNewAuthor = (event) => {
    this.setState({
      author: event.target.value
    })
  }

  onChangeNewImg = (event) => {
    this.setState({
      img: event.target.value
    })
  }

  onChangeNewFactoid = (event) => {
    this.setState({
      factoid: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:4000/books/', this.state)
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
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Add a Book</legend>
            <label for="title">TITLE</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.onChangeNewTitle}/><br/>
            <label for="author">AUTHOR</label>
            <input
              type="text"
              value={this.state.author}
              onChange={this.onChangeNewAuthor}/><br/>
            <label for="img">COVER IMAGE</label>
            <input
              type="text"
              value={this.state.img}
              onChange={this.onChangeNewImg}/><br/>
            <label for="factoid">FACT</label>
            <input
              type="text"
              value={this.state.factoid}
              onChange={this.onChangeNewFactoid}/><br/>
            <input type="submit" value="SUBMIT" class="add-btn" />
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;
