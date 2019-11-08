import React, { useState, useEffect } from 'react';
import API from '../utils/API';

const styles = {
  width: '100%',
  height: '80%',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap'
};

function SavedBookList(props) {
  const [books, setBooks] = useState([]);

  const getSavedBooks = () => {
    API.getSaved()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteBook = (id) => {
    console.log(id);
    API.deleteBook(id)
      .then((res) => {
        console.log('deleted');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // Update the document title using the browser API
    getSavedBooks();
  }, []);

  return (
    <div className="container">
      {books.map((book) => (
        <div>
          {book.title}
          {book.image}
          {book.authors}
          <button onClick={() => deleteBook(book._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default SavedBookList;
