import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./checkoutstyles.css";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./index.css";

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className="FormRow" style={{ marginTop: -3 }}>
    <label htmlFor={id} className="FormRowLabel">
      {label}
    </label>
    <input
      className="FormRowInput"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      style={{ marginTop: 7 }}
    />
  </div>
);

function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data, "CLIENT_SECRET - USE EFFECT");
        setClientSecret(data.clientSecret);
      });
  }, []);
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
        borderRadius: "0px",
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    console.log(clientSecret);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: email,
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };
  return (
    <form id="form" onSubmit={handleSubmit} style={{ padding: 0 }}>
      <fieldset className="FormGroup">
        <Field
          label="Email"
          id="email"
          type="email"
          required
          placeholder="Please enter email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>
      <fieldset className="FormGroup">
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
      </fieldset>
      <button
        className="pay-button"
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div
          className="card-error flex-center"
          role="alert"
          style={{ margin: 15, paddingBottom: 10 }}
        >
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
          {" "}
          Stripe dashboard.
        </a>{" "}
        Refresh the page to pay again.
      </p>
    </form>
  );
}

const promise = loadStripe(
  "pk_test_51HYiynEJsllcSPP3OAsJuI8f36WxDYLp5HziJKKyVDEv5yDdFPEt7xGPFLFTW8J7nRfPU4yQaNfBImOCEuRFlTdK00VHGHM4aE"
);

export default function TheCheckout() {
  return (
    <div>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
