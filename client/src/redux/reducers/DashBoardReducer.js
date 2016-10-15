import * as types from '../actions/actionTypes';

const initialState = {
  menuLeft: false,
  selectItem: null
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
    default:
      return state;
  }
};
