import { TEST } from '../constants/ActionTypes'

function testAction(isLoading) {
    return {
        type: TEST,
        test: 'test'
    }
}


function testChanged(test) {

    return (dispatch, getState) => {
        console.log("test changed", test);
        return dispatch(testAction(test));
    }
}

 module.exports = {
     testChanged
};


