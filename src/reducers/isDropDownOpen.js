import { TOGGLE_DROPDOWN } from '../actions/const';

function reducer(state = false, action) {
  switch (action.type) {

    case TOGGLE_DROPDOWN: {
      return action.isOpen;
    }

    default: {
      return state;
    }
  }
}

export default reducer;
