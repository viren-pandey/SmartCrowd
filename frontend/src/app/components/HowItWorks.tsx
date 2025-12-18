import { motion } from 'framer-motion';
import { Upload, Cpu, LineChart } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload or Use Webcam',
    description: 'Connect your camera feed or upload video files for instant analysis.',
    step: '01',
  },
  {
    icon: Cpu,
    title: 'AI Detection Processing',
    description: 'SmartCrowd runs advanced AI models to detect and track individuals in real-time.',
    step: '02',
  },
  {
    icon: LineChart,
    title: 'Visualize & Analyze',
    description: 'Dashboard displays risk levels, people count, and density trends with live graphs.',
    step: '03',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#11DD88]/10 text-[#11DD88] rounded-full mb-4">
            How It Works
          </div>
          <h2 className="text-gray-900 mb-4">
            Three Simple Steps to Safety
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started with SmartCrowd in minutes and transform how you monitor crowd safety.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#0066FF] via-[#11DD88] to-[#0066FF]" style={{ top: '80px' }}></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#11DD88] rounded-full flex items-center justify-center text-white">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF]/10 to-[#11DD88]/10 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-[#0066FF]" />
                </div>

                {/* Content */}
                <h3 className="text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
