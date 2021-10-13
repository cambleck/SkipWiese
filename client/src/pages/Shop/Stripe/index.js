import React, { StrictMode } from "react";
import M from "materialize-css";
import Checkout from "./ThirdCheckout";
import logo from "../../../logo.png";

class PaymentModal extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <StrictMode>
        <div id="stripe" class="modal stripe-modal">
          <div className="flex-center column">
            <nav className="nav transparent">
              <div className="stripe"></div>
              <div className="nav-wrapper">
                <img src={logo} alt="Skip Wiese Logo" className="logo" />
              </div>
              <div className="stripe"></div>
            </nav>

            <Checkout />
          </div>
        </div>
      </StrictMode>
    );
  }
}

export default PaymentModal;
