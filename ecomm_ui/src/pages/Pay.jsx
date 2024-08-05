import StripeCheckout from "react-stripe-checkout";

const StripeKey = "pk_test_51Pf1qfSJZBLjn1Gt6oeZf01g1Oa8UlUjUmS056HoOWttWcd1KN7rjBRWdLj1ho9dMFaOUVKQrNzVUz4mzmQFqt8G005I4S83H3"

const Pay = () => {

    const onToken = (token) => {
        console.log(token)
    }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
          <StripeCheckout name="DosBrosCo." image="/" shippingAddress
              billingAddress
              description="Your total is $20"
              amount={2000}
              token={onToken}
              stripeKey={StripeKey}
          > 
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
