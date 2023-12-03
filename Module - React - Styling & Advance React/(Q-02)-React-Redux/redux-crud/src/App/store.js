import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import rootReducer from "./rootReducer";

const middleWare = [reduxThunk]

// creating store with the rootReducer we imported
// applying reduxThunk with applyMiddleware, which will help in async operation througout the app
const store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;