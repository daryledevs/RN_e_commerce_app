import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import itemReducer from "./itemReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
  item: itemReducer,
  cart: cartReducer,
  user: userReducer
})

export default rootReducer;