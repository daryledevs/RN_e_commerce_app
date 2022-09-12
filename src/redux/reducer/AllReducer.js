import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
  item: itemReducer,
  cart: cartReducer,
})

export default rootReducer;