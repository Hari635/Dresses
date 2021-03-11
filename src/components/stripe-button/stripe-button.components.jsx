import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100
    const publishableKey='pk_test_51IOOwCGcIJ0kKBJB54esoZQMKcq2k3B9xgnsjFGSGvzV0Hhij69L0JRd8ChVUKKEFJ6Rl3VSLRXjO5amziHSd1YW00rrtf3C4r'
 const onToken=(token)=>{
     console.log(token);
     alert('Payment Successful')
 }
    return(
    <StripeCheckout
     label='Pay Now'
     name='Shopping-cart Ltd.'
     billingAddress
     shippingAddress
     description={`Your total is ${price}`}
     amount={priceForStripe}
     panelLabel='Pay Now'
     token={onToken}
     stripeKey={publishableKey}
    
    />
)

}

export default StripeCheckoutButton

