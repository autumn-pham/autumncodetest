import React from 'react';

 const GoogleBook = ({ googleBook, displayDetailFields, onSearchBook, onChangeName }) => {
   return (
     <div className="search-container">
      <h2>Find YOUR Next Great Read</h2>
      <div className="google-books-input">
          <form onSubmit={onSearchBook}>
            <input type="text" onKeyUp={onChangeName} placeholder="book name"/>
            <button className="btn btn-dark" type="submit" name="action">SEARCH
            </button>
          </form>
      </div>
      {
        (displayDetailFields) ?
        <div className="book-container">
        <div className="google-book">
          <p><span className="bold">Title:</span> {googleBook.title}</p>
          <p><span className="bold">Author:</span> {googleBook.authors[0]}</p>
          <p><span className="bold">Description:</span> {googleBook.description}</p>
          <p><span className="bold">Rating:</span> {googleBook.averageRating}</p>
        </div>
        <div className="google-book-img">
          <img src={googleBook.imageLinks.thumbnail} /><br/>
          <p><a href={googleBook.previewLink} target="_blank">Preview book here</a></p>
        </div>
      </div>
      : ""
    }
     </div>
   )
 }

 export default GoogleBook;
