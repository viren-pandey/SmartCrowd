import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Demo } from './components/Demo';
import { UseCases } from './components/UseCases';
import { CallToAction } from './components/CallToAction';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Demo />
      <UseCases />
      <CallToAction />
      <ContactForm />
      <Footer />
    </div>
  );
}
