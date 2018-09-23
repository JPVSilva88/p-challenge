import { MARK_AS_READ, MARK_ALL_AS_READ, SET_FEED } from '../actions/const';

function reducer(state = [], action) {
  switch (action.type) {

    case SET_FEED: {
      return action.feed.map((notification) => notification.post && notification.post.id + notification.type);
    }

    case MARK_AS_READ: {
      return state.filter((id) => action.ids.indexOf(id) === -1);
    }

    case MARK_ALL_AS_READ: {
      return [];
    }
    default: {
      return state;
    }
  }
}

export default reducer;
