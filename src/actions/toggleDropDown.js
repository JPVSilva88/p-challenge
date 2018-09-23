import { TOGGLE_DROPDOWN } from './const';

function action(isOpen) {
    console.info("here");
    return { type: TOGGLE_DROPDOWN, isOpen };
}

export default action;
