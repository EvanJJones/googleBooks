import React from 'react';
import API from '../utils/API';
import Container from './Container';

const styles = {
  width: '100%',
  height: '80%',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap'
};

function Books(props) {
  const saveBook = (book) => {
    const {
      title,
      authors,
      description,
      imageLinks,
      infoLink
    } = book.volumeInfo;

    const newBook = {
      title: title,
      authors: authors,
      description: description,
      image: imageLinks.thumbnail,
      link: infoLink
    };
    API.saveBook(newBook)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {props.books.map((book) => (
        <div key={book.id}>
          <h1>{book.volumeInfo.title}</h1>
          <h2>{book.volumeInfo.authors}</h2>
          <p>{book.volumeInfo.description}</p>
          <img
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : 'https://via.placeholder.com/128x171'
            }
          />
          <p>{book.volumeInfo.infoLink}</p>
          <button onClick={() => saveBook(book)}>Save</button>
        </div>
      ))}
    </div>
  );
}

export default Books;
