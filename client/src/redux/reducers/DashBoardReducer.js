import * as types from '../actions/actionTypes';

const initialState = {
  menuLeft: false,
  selectItem: null,
  liked: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_DASHBOARD:
      return {
        ...state,
        menuLeft: !state.menuLeft
      };
    case types.SELECT_ITEM_PLAYLIST:
      return {
        ...state,
        selectItem: action.item
      };
    case types.TOGGLE_LIKED_ITEM:
      return {
        ...state,
        liked: !state.liked
      }
    default:
      return state;
  }
};
