import React from 'react';


const Card = ({ books, currentBook, onNextBook, onDelete }) => {
  return (
    <div className="card text-center" key={currentBook._id}>
        <img src={currentBook.img} className="card-img-top" alt="book cover" />
        <div className="card-body">
          <h4>{currentBook.title}</h4>
          <h5>{currentBook.author}</h5>
          <p className="card-text">{currentBook.factoid}</p>
          <button className="btn btn-danger" value={currentBook._id} onClick={onDelete} type="submit" name="action">DELETE</button>
          <button className="btn btn-primary" onClick={onNextBook}>Next</button>
        </div>
    </div>
  )
}

export default Card;
