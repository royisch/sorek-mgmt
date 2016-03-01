import { TEST_ACTION } from '../constants/ActionTypes'
import _ from 'underscore'


function getInitialState() {

    var state = {

    };
    return state;
}

function mainViewReducer(state = getInitialState(), action = null) {
    switch (action.type) {
        case TEST_ACTION :
            return Object.assign({}, state, {test: action.test});

        default:
            return state;
    }
}


module.exports = {
  mainViewReducer
};
