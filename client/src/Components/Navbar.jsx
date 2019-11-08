import React, { useState, useEffect } from 'react';

const styles = {
  width: '100%',
  height: '80%',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap'
};

function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        GoogleBooks
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/saved">
              Saved Books
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
