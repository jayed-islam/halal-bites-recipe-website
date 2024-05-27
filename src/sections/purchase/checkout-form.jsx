/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/auth-context";
import { usePurchaseCoinMutation } from "../../redux/reducers/auth/authApi";
import toast from "react-hot-toast";
import { paths } from "../../layouts/paths";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ props }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AppContext);
  const [cardError, setCardError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [tranId, setTranId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [createPurchase] = usePurchaseCoinMutation();

  const navigate = useNavigate();

  const purchaseData = {
    userId: props.userId,
    coinsPackage: props.coins,
  };

  useEffect(() => {
    fetch(`${process.env.VITE_SERVER_API}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price: parseInt(props.dollars) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [props]);

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    if (!stripe || !elements) {
      setIsLoading(false);
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      setIsLoading(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setIsLoading(false);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    setSuccessMsg("");

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setIsLoading(false);
      setSuccessMsg("Congrats! your payment succeded");
      setTranId(paymentIntent.id);

      const response = await createPurchase(purchaseData).unwrap();

      if (response.success) {
        toast.success(response.message);
        navigate(paths.recipe.allrecipes);
      }
    }

    console.log("paymentIntent", paymentIntent);
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || !clientSecret || isLoading}
        className="bg-gray-300 rounded-md px-5 w-44 py-1.5 mt-7 cursor-pointer"
      >
        {isLoading ? "loading..." : "Pay"}
      </button>

      {cardError && (
        <p className="text-red-500 font-semibold text-sm mt-5">{cardError}</p>
      )}
      {successMsg && tranId && (
        <div className="mt-5">
          <p className="text-xl font-semibold text-green-500">{successMsg}</p>
          <p>TransactionID: {tranId}</p>
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
