import { createStore } from "redux";
import rootReducers from "./reducers";


// this works, but is deprecated - see up-to-date redux docs https://redux-toolkit.js.org/api/configureStore
const store = createStore(rootReducers);

export default store;