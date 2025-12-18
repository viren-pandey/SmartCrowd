import { motion } from 'framer-motion';
import { Camera, Shield, Bell, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Real-Time Object Detection',
    description: 'Detects people instantly with live webcam feed using advanced AI models.',
    color: '#0066FF',
  },
  {
    icon: Shield,
    title: 'AI Risk Engine',
    description: 'Identifies Low, Medium, High, and Danger levels based on crowd density.',
    color: '#11DD88',
  },
  {
    icon: Bell,
    title: 'Live Alerts',
    description: 'Sends instant safety warnings for crowd surges and potential hazards.',
    color: '#0066FF',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Graphs, statistics, density trends and comprehensive reporting tools.',
    color: '#11DD88',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white" id="features">
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
            Key Features
          </div>
          <h2 className="text-gray-900 mb-4">
            Advanced AI-Powered Monitoring
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SmartCrowd combines cutting-edge computer vision with real-time analytics to keep your spaces safe.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
              </div>
              <h3 className="text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
