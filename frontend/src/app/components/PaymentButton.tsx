import React from "react"

export default function PaymentButton() {
  async function handlePay() {
    const body = {
      amount: 100.0,
      customer_name: "Test User",
      customer_email: "test@example.com",
      customer_phone: "9999999999"
    };

    const res = await fetch("/api/create-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (data.order_id && data.payment_link) {
      // redirect to Cashfree hosted checkout
      window.location.href = data.payment_link;
    } else {
      alert("Payment initialization failed");
      console.error(data);
    }
  }

  return (
    <button onClick={handlePay}>
      Pay ₹100
    </button>
  );
}
