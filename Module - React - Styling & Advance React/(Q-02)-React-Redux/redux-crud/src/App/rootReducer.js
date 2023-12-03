import { combineReducers } from "redux";
import userReducer from "../Feature/userReducer";

// combining all the reducers using combineReducers
// to create a property for each reducer which can be used all over the app
const rootReducer = combineReducers({
   user: userReducer
});

export default rootReducer;