import React, { useState, useEffect } from "react";
import API from "../utils/API";

const styles = {
  width: "100%",
  height: "80%",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap"
};

function SavedBookList(props) {
  // state that will hold the list of saved bookks from db
  const [books, setBooks] = useState([]);

  // gets ssaved books from the db
  const getSavedBooks = () => {
    API.getSaved()
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => console.log(err));
  };

  // removes a book from the db
  const deleteBook = id => {
    console.log(id);
    API.deleteBook(id)
      .then(res => {
        const filtered = books.filter(book => book._id !== id);
        setBooks(filtered);
        console.log(books);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    // Update the document title using the browser API
    getSavedBooks();
  }, []);

  return (
    <div>
      {books.map(book => (
        <div className="card" key={book._id}>
          <div className="card-header">
            <a href={book.link}>
              <h2>{book.title}</h2>{" "}
            </a>{" "}
            By: {book.authors}
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <img
                className="float-left m-3"
                src={
                  book.image
                    ? book.image
                    : "https://via.placeholder.com/128x171"
                }
              />
              <p className="m-3">{book.description}</p>
              <button onClick={() => deleteBook(book._id)}>Remove</button>
            </blockquote>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SavedBookList;
