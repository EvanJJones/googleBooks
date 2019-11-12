import React, { useState, useEffect } from "react";
import API from "../utils/API";

const styles = {
  width: "100%",
  height: "80%",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap"
};

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Search for a book"
        name="search"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={() => props.searchGoogleBooks(searchTerm)}>
        Search
      </button>
    </>
  );
}

export default Search;
