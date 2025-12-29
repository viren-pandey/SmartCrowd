import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Demo } from "./components/Demo";
import { UseCases } from "./components/UseCases";
import { CallToAction } from "./components/CallToAction";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

/**
 * SIMPLE INLINE PAYMENT BUTTON
 * (no separate component needed)
 */
function PaymentSection() {
  const payNow = async () => {
    try {
      const res = await fetch("http://localhost:8000/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 99,
          customer_name: "Test User",
          customer_email: "test@test.com",
          customer_phone: "9999999999",
        }),
      });

      const data = await res.json();
      console.log("Payment response:", data);

      if (!data.payment_session_id) {
        alert("Payment init failed");
        return;
      }

      const cashfree = new window.Cashfree({
        mode: "sandbox",
      });

      cashfree.checkout({
        paymentSessionId: data.payment_session_id,
        redirectTarget: "_self",
      });
    } catch (err) {
      console.error(err);
      alert("Payment error");
    }
  };

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold">Unlock SmartCrowd</h2>
      <p className="mt-4 text-gray-600">
        Pay once to access real-time crowd detection
      </p>

      <button
        onClick={payNow}
        className="mt-8 px-8 py-4 bg-black text-white rounded-lg text-lg hover:opacity-90"
      >
        Pay ₹99
      </button>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Demo />
      <UseCases />

      {/* 🔥 PAYMENT SECTION (THIS WAS MISSING BEFORE) */}
      <PaymentSection />

      <CallToAction />
      <ContactForm />
      <Footer />
    </div>
  );
}
