const INITIAL_STATE = {
  registerModal: {
    show: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state,
        [action.modalName]: {
          show: true
        }
      }
    case 'CLOSE_MODAL':
      return INITIAL_STATE;
    default:
      return state;
  }
};
