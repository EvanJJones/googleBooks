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
      link: infoLink
    };
    if (!imageLinks) {
      newBook.image = 'https://via.placeholder.com/128x171';
    } else {
      newBook.image = imageLinks.thumbnail;
    }

    API.saveBook(newBook)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {props.books.map((book) => (
        <div class="card" key={book.id}>
          <div class="card-header">
            <a href={book.volumeInfo.infoLink}>
              <h2>{book.volumeInfo.title}</h2>{' '}
            </a>{' '}
            By: {book.volumeInfo.authors}
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <img
                className="float-left m-3"
                src={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : 'https://via.placeholder.com/128x171'
                }
              />
              <p className="m-3">{book.volumeInfo.description}</p>
              <button onClick={() => saveBook(book)}>Save</button>
            </blockquote>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Books;
