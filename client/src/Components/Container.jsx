import React, { useState, useEffect } from "react";
import API from "../utils/API";
import BookList from "./BookList.jsx";
import Search from "./Search.jsx";

const styles = {
  width: "100%",
  height: "80%",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap"
};

function Container(props) {
  // state that holds the books to display
  const [books, setBooks] = useState([]);

  // hits the google bookks api and puts them into state
  const searchGoogleBooks = query => {
    API.search(query)
      .then(res => {
        setBooks(res.data.items);
        console.log(res.data.items);
        console.log(res.data.items[0].volumeInfo);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Search searchGoogleBooks={searchGoogleBooks} />
      <BookList books={books} />
    </>
  );
}

export default Container;
