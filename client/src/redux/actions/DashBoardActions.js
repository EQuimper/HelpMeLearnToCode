import * as types from './actionTypes';

export const toggleDashBoard = () => ({ type: types.TOGGLE_DASHBOARD });
export const selectItemPlaylist = item => ({
  type: types.SELECT_ITEM_PLAYLIST,
  item
});
