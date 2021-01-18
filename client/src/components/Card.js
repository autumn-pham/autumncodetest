import React from 'react';

const Card = ({ books, currentBook, onNextBook, onDelete }) => {
  return (
    <div className="card text-center" key={currentBook._id}>
        <img src={currentBook.img} className="card-img-top" alt="book cover" />
        <div className="card-body">
          <h4>{currentBook.title}</h4>
          <h5>{currentBook.author}</h5>
          <p className="card-text">{currentBook.factoid}</p>
          <div className="button-container">
            <button className="btn btn-danger delete-btn" value={currentBook._id} onClick={onDelete} type="submit" name="action">DELETE</button>
            <button className="btn btn-primary next-btn" onClick={onNextBook}><i className="fas fa-forward"></i></button>
          </div>
        </div>
    </div>
  )
}

export default Card;
