import { createStore } from 'redux';
import getInitialState from './BoardConfig';
import { CHANGE_PLAYER, PLACE_CHIP, REMOVE_CHIP } from './ActionTypes';

const initialState = getInitialState();

const players = ['BLUE', 'GREEN'];

function getNextPlayer(currentPlayer) {
    return players[Math.abs(players.indexOf(currentPlayer) - 1)];
}

function placeChipAt(newCardsSequence, card, player) {
    newCard = newCardsSequence[card.row][card.column];
    newCard.player = player;
}

function removeChipAt(newCardsSequence, card) {
    placeChipAt(newCardsSequence, card, null);
}

function sequenceStore(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PLAYER:
            return Object.assign({}, state, {
                player: getNextPlayer(state.player)
            });

        case PLACE_CHIP:
            newState = Object.assign({}, state);
            placeChipAt(newState.cardsSequence, action.payload.card, state.player);
            newState.player = getNextPlayer(state.player);
            return newState;

        case REMOVE_CHIP:
            newState = Object.assign({}, state);
            removeChipAt(newState.cardsSequence, action.payload.card);
            newState.player = getNextPlayer(state.player);
            return newState;

        default:
            return state;
    }
}

export default createStore(sequenceStore);