import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container text-white">
        <h1 className="display-4">Flashcard-o-matic</h1>
        <h6 className="lead">Create your own flashcards</h6>
      </div>
    </header>
  );
}

export default Header;
