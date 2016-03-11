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
      fetch('/test')
        .then(function(response) {
          console.log(response);
          return dispatch(testAction(test));
        })
        .catch(function(ex) {
        console.log('parsing failed', ex)
      })

    }
}

 module.exports = {
     testChanged
};


