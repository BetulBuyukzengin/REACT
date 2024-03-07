import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

//! Reducerları birleştirmek için route reducer oluşturup combineReducers fonksiyonunu çağırma
const routeReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//! Store oluşturma
// const store = createStore(accountReducer);
const store = createStore(routeReducer);
export default store;
