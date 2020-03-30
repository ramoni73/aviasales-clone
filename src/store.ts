import {createStore} from "redux";
import reducer from "./reducers/ticketReducer";

const store = createStore(reducer);

export default store;