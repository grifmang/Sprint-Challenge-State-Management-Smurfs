import axios from "axios";

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const POST_DATA = 'POST_DATA';

export const getData = () => dispatch => {
    // console.log('it worked')
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
        console.log(res);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};

export const postData = (item) => dispatch => {
  axios.post(`http://localhost:3333/smurfs`, item)
  .then(response => {
    dispatch({ type: POST_DATA, payload: response.data });
  })
  .catch(err => {
    console.log('Something did not work, error is: ' + err);
  })
}