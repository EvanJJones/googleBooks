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
      <a href="/" className="navbar-brand">
        Home
      </a>
      <a href="/saved" className="navbar-brand">
        Saved
      </a>
    </nav>
  );
}

export default Navbar;
