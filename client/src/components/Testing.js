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
