import React from 'react';

const styles = {
  width: '100%',
  height: '80%',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap'
};

function Books(props) {
  return (
    <div>
      {props.books.map((book) => (
        <div>{book.volumeInfo.title}</div>
      ))}
    </div>
  );
}

export default Books;
