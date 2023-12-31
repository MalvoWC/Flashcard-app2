import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import CardList from "../Cards/CardsList";


export default function Study() {


  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [cardCount, setCardCount] = useState(0)
  const { deckId } = useParams();
  const history = useHistory();
  //loads selected deck
  useEffect(() => {
    const deckAbort = new AbortController();


    async function showCard() {
      try {
        const cardList = await readDeck(deckId, deckAbort.signal);
     
        setDeck(cardList);
        setCardCount(cardList.cards.length);
        console.log("cardlist.cards ", cardList.cards);
        setCards(cardList.cards);
      }
      catch (error) {
        console.log("error creating card list");
      }
    } 


    showCard();
    return () => deckAbort.abort();
  },[deckId]) //reruns effect when deckId changes


 
if (deck && deck.id && cards.length < 3) {
  return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
        <h1>
          {deck.name}
        </h1>
        <h4>
          Not Enough Cards.
        </h4>
        <p>
          You need at least 3 cards to study. There are only '{`${cardCount}`}' card(s) in this deck.
        </p>
        <button 
        type="button" 
        className="btn btn-primary"
        onClick={() => history.push(`/decks/${deckId}/cards/new`)}>
          + Add Cards
        </button>
      </div>
    )
  }
    if(deck && deck.id)
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Study</li>
        </ol>
      </nav>
      <h1>Study: {`${deck.name}`}</h1>
      <div><CardList cards={cards} /></div>
    </div>
  )
  return (
    <div className="container">
      <p className="text-center">
        lodaing ...
      </p>
    </div>
  )
}
