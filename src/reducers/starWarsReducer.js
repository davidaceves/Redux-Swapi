import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        error: "",
        fetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: [...state.characters, ...action.payload]
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
