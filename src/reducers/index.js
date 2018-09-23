import { combineReducers } from 'redux';
import isDropDownOpen from './isDropDownOpen';
import unreadNotifications from './unreadNotifications';
import feed from './feed';

const combined = combineReducers({
    isDropDownOpen,
    unreadNotifications,
    feed
});
export default combined;