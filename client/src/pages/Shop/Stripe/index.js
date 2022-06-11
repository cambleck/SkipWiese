import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import M from "materialize-css";
import CheckoutForm from "./CheckoutForm";
import "./index.css";
import logo from "../../../logo.png";
import Loading from "../../../common/Loading";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
const promise = loadStripe(
  "pk_test_51HYiynEJsllcSPP3OAsJuI8f36WxDYLp5HziJKKyVDEv5yDdFPEt7xGPFLFTW8J7nRfPU4yQaNfBImOCEuRFlTdK00VHGHM4aE"
);
export default function Stripe({ total, cart, clientSecret }) {
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div id="stripe" className=" modal stripe-modal ">
      {clientSecret ? (
        <Elements options={options} stripe={promise}>
          <div className="flex-center column">
            <nav className="header transparent" style={{ marginBottom: -10 }}>
              <div className="header-stripe"></div>
              <div className="nav-wrapper">
                <img src={logo} alt="Skip Wiese Logo" className="logo" />
              </div>
              <div className="header-stripe"></div>
            </nav>

            <CheckoutForm total={total} clientSecret={clientSecret} />
          </div>
        </Elements>
      ) : (
        <Loading />
      )}
    </div>
  );
}
