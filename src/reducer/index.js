import { INSERT_DATA } from "../actions";
import { combineReducers } from "redux";

const initialState = {
  data: []
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_DATA:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;