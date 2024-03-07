import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

//! React hooks yok iken react componentlerini redux store a bağlama
//* Balance değerini gösterme
function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}
function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}
export default connect(mapStateToProps)(BalanceDisplay);

// function BalanceDisplay() {
//   return <div className="balance">{formatCurrency(123456)}</div>;
// }

// export default BalanceDisplay;
