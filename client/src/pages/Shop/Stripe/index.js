import React, { StrictMode } from "react";
import M from "materialize-css";
import Checkout from "./Checkout";
import logo from "../../../logo.png";
import { FaStripe } from "react-icons/fa";

class PaymentModal extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <StrictMode>
        <div id="stripe" class="modal stripe-modal" style={{ height: 400 }}>
          <div className="flex-center column">
            <nav className="nav transparent">
              <div className="stripe"></div>
              <div className="nav-wrapper">
                <img src={logo} alt="Skip Wiese Logo" className="logo" />
              </div>
              <div className="stripe"></div>
            </nav>
            <Checkout />
            <div className="flex-center">
              <div style={{ marginRight: 3, fontSize: 14 }}>powered by</div>
              <a
                href="https://stripe.com"
                style={{ padding: 0, color: "black" }}
              >
                <FaStripe size={36} style={{ marginTop: 9 }} />
              </a>
            </div>
          </div>
        </div>
      </StrictMode>
    );
  }
}

export default PaymentModal;
