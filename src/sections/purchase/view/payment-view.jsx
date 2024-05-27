/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../checkout-form";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(process.env.VITE_STRIPE_PK);

const PaymentView = ({ props }) => {
  const location = useLocation();
  console.log(location.state);
  const purchaseData = location.state;
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 mt-9 mb-16 pb-32">
      PaymentView
      <div className="max-w-md rounded-3xl border shadow p-5 mt-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm props={purchaseData} />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentView;
