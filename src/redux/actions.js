export const GET_CHARACTERS = "GET_CHARACTERS";

export const getCharacters = () => {
  /*return{
    type: GET_CHARACTERS,
    payload: [
      { id: 1, name: "Martín" },
      { id: 2, name: "Kevin" },
    ],
  };*/

  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response
        .json()
        .then((data) => dispatch({ type: GET_CHARACTERS, payload: data }))
    );
  };

  //CON AXIOS
  /*return function (dispatch) {
    axios("https://jsonplaceholder.typicode.com/users").then((data) =>
      dispatch({ type: GET_CHARACTERS, payload: data.data })
    );
  };*/
};

export const removeCharacter = (id) => {
  return { type: "REMOVE_CHARACTER", payload: id };
};
