import { GET_CHARACTERS } from "./actions";

const initialState = {
  characters: [],
};

//PARA EL CASO DE AGREGAR UN PERSONAJE
//{type:ADD_CHARACTERS, payload:{}}
//PARA EL CASO DE ELIMINAR UN PERSONAJE
//{type:REMOVE_CHARACTERS, payload:id}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    //PARA EL CASO DE AGREGAR UN PERSONAJE
    /*case ADD_CHARACTERS:
      return { ...state, characters: [...state.characters, action.payload] };
    */
    //PARA EL CASO DE ELIMINAR UN PERSONAJE
    /*case REMOVE_CHARACTERS:
      return { ...state, characters: state.characters.filter((char)=>char.id !== action.payload) };
    */
    default:
      return { ...state };
  }
};

export default rootReducer;
