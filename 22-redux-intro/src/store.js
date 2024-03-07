import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

//! Reducerları birleştirmek için route reducer oluşturup combineReducers fonksiyonunu çağırma
const routeReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//! Store oluşturma ve thunk middleware ini kullanma
const store = createStore(
  routeReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
