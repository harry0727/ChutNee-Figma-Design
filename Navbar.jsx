import React from 'react';

export default function Navbar(){
  return (
    <header className="navbar fade-in-down">
      <div className="container nav-inner">
        <div className="brand">ChutNee</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
