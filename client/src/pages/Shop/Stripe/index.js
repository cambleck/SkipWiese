import React from "react";
import M from "materialize-css";
import Checkout from "./Checkout";

class PaymentModal extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div id="stripe" class="modal stripe-modal" style={{ height: 400 }}>
        <div className="flex-center">
          <Checkout />
        </div>
      </div>
    );
  }
}

export default PaymentModal;
