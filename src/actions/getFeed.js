import setFeed from './setFeed';

function action() {
    return function (dispatch) {
        return fetch('http://www.mocky.io/v2/5b4315f12e00004c002230c3')
            .then(res => res.json())
            .then(res => {
                dispatch(setFeed(res));
            });
    };
}

export default action;
