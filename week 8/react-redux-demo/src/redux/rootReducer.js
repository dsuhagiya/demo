import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import reducer from "./user/userReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  user: reducer,
});
