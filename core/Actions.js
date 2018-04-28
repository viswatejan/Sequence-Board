import { CHANGE_PLAYER, PLACE_CHIP, REMOVE_CHIP } from './ActionTypes';

export const changePlayer = () => ({ type: CHANGE_PLAYER });
export const placeChip = card => ({ type: PLACE_CHIP, payload: { card } });
export const removeChip = card => ({ type: REMOVE_CHIP, payload: { card } });