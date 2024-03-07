import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { configureStore } from "@reduxjs/toolkit"; //createStore yerine kullanacağız

//! ConfigureStore ile Store oluşturma (toolkit kullanımı)
const store = configureStore({
  reducer: { account: accountReducer, customer: customerReducer },
});
export default store;
