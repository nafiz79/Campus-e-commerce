import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";

const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AaDn8LLQzQOhi9x1OTst1C63suN1FrJi5oMXwtxH5BZhY_obpp3-28OZtwM-jVx4OxWTwCVw4ZN1vySm",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
