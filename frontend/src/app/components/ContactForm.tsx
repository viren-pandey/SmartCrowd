import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function ContactForm() {
  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#0066FF]/10 text-[#0066FF] rounded-full mb-4">
            Get in Touch
          </div>
          <h2 className="text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contact us to learn more about SmartCrowd or schedule a personalized demo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-gray-900 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                We're here to help you enhance safety and optimize crowd management in your space.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0066FF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#0066FF]" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Email</div>
                  <div className="text-gray-600">pandeyviren68@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#11DD88]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#11DD88]" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Phone</div>
                  <div className="text-gray-600">+91 70689-4550x</div>
                </div>
              </div>

              
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-900">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your Full Name"
                      className="rounded-xl border-gray-300 focus:border-[#0066FF] focus:ring-[#0066FF]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Personal Email"
                      className="rounded-xl border-gray-300 focus:border-[#0066FF] focus:ring-[#0066FF]"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-gray-900">
                    Organization
                  </Label>
                  <Input
                    id="organization"
                    placeholder="Your Company Name"
                    className="rounded-xl border-gray-300 focus:border-[#0066FF] focus:ring-[#0066FF]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-900">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your crowd monitoring needs..."
                    rows={6}
                    className="rounded-xl border-gray-300 focus:border-[#0066FF] focus:ring-[#0066FF] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button className="w-full bg-gradient-to-r from-[#0066FF] to-[#0055DD] hover:from-[#0055DD] hover:to-[#0044CC] text-white rounded-xl py-6">
                  Send Message
                </Button>

                <p className="text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
