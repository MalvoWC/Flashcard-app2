import React from "react";
import DeckList from "./DeckList";
import { useHistory } from "react-router-dom";

export default function Home() {

  const history = useHistory();

  const handleCreateDeck = () => {
    history.push("/decks/new")
  }

  return (
    <div>
      <h1>
        Home
      </h1>
      <button 
        type="button" 
        className="btn btn-secondary my-2" 
        onClick={handleCreateDeck}>
          + Create Deck
        </button>
        <br />
      <DeckList />
    </div>
  )
}