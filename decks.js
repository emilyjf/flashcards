import { FETCH_DECKS } from "../config/consts";
import DeckService from "../services/DeckService";

export const getDecks = () => dispatch => {
  return dispatch({
    type: FETCH_DECKS,
    payload: DeckService.getDecksService()
  });
};

export const createDeck = deckTitle => dispatch => {
  const newDeck = {
    [deckTitle]: {
      title: deckTitle,
      questions: []
    }
  };
  return DeckService.createDeckService(newDeck).then(res =>
    dispatch({ type: FETCH_DECKS, payload: DeckService.getDecksService() })
  );
};

export const addCardToDeck = (deck, card) => dispatch => {
  return DeckService.createCardService(deck, card).then(res =>
    dispatch({ type: FETCH_DECKS, payload: DeckService.getDecksService() })
  );
};
