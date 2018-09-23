import { MARK_AS_READ } from './const';

function action(ids) {
    return { type: MARK_AS_READ, ids };
}

export default action;
