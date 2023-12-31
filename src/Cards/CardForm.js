import React from "react";
import { Link } from "react-router-dom";

export default function CardForm({ deckId, changeHandler, submitHandler, card }) {
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          type="textarea"
          name="front"
          id="front"
          className="form-control"
          rows="5"
          placeholder="Front side of card"
          onChange={changeHandler}
          value={card.front}
        />
      </div>
      <div>
        <label htmlFor="back">Back</label>
        <textarea
          type="textarea"
          name="back"
          id="back"
          className="form-control"
          rows="5"
          placeholder="Back side of card"
          onChange={changeHandler}
          value={card.back}
        />
      </div>
      <div>
        <Link to={`/decks/${deckId}`} className="btn btn-secondary mr-2 mt-2">
          Done
        </Link>
        <button className="btn btn-primary mt-2" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}