import { SET_FEED } from '../actions/const';

function reducer(state = [], action) {
  switch (action.type) {

    case SET_FEED: {
      return action.feed;
    }

    default: {
      return state;
    }
  }
}

export default reducer;
