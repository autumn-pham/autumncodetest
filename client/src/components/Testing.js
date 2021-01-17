<div className="card-columns">
{ this.state.books.map((book) => {
  return <div className="card text-center" key={book._id}>
    <img src={book.img} className="card-img-top" alt="book cover" />
    <div className="card-body">
      <h4>{book.title}</h4>
      <h5>{book.author}</h5>
      <p className="card-text">{book.factoid}</p>
      <button className="btn btn-danger delete-btn" value={book._id} onClick={this.deleteBook} type="submit" name="action">
        DELETE
        </button>
    </div>
    </div>
})}





const {books, index} = this.state;
const currentBook = books[index];
return (

     <div className="card text-center" key={currentBook._id}>
      <img src={currentBook.img} className="card-img-top" alt="book cover" />
      <div className="card-body">
        <h4>{currentBook.title}</h4>
        <h5>{currentBook.author}</h5>
        <p className="card-text">{currentBook.factoid}</p>
        <button className="btn btn-danger delete-btn" value={currentBook._id} onClick={this.deleteBook} type="submit" name="action">
          DELETE
          </button>
      </div>
      </div>
