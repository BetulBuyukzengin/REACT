import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    //! Reducer da olduğu gibi error oluşturmuyoruz, olmadığı durumda da state güncellenmeyecek
    default:
      return state;
  }
}

const store = createStore(reducer);

// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a car" },
// });
// console.log(store.getState());
// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

//const ACCOUNT_DEPOSIT="account/deposit"; --> eski react tabanlı projelerde, değişkenlerde tutulurdu
//! Action creator functions
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(100));
store.dispatch(requestLoan(1000, "Buy a car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());
