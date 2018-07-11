import axios from 'axios';
export const GET_ALL_BOOKS = "GET_ALL_BOOKS";

export const getAllBooks = () => {
  return (dispatch) => {
    axios.get('https://fakerestapi.azurewebsites.net/api/Books')
      .then(({data}) => {
        dispatch({
          type: GET_ALL_BOOKS,
          payload: data
        })
      })
  }
}