import { SET_FEED } from './const';

function action(feed) {
    return { type: SET_FEED, feed };
}

export default action;
