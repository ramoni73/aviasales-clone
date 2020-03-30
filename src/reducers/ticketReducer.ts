import { GET_TICKETS } from "../actions/types";

const initialState = {
  tickets:[]
};

export const reducer = (state = initialState, action:any) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case GET_TICKETS:
      return {
        tickets: action.payload
      };
    default:
      return state;
  }
};

export default reducer