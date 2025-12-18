import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, TrendingUp, AlertTriangle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const densityData = [
  { time: '10:00', density: 20 },
  { time: '10:15', density: 35 },
  { time: '10:30', density: 45 },
  { time: '10:45', density: 52 },
  { time: '11:00', density: 48 },
  { time: '11:15', density: 38 },
  { time: '11:30', density: 30 },
];

export function Demo() {
  return (
    <section className="py-24 bg-white" id="demo">
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
            Live Demo
          </div>
          <h2 className="text-gray-900 mb-4">
            See SmartCrowd in Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience real-time crowd detection with live bounding boxes, density visualization, and risk analysis.
          </p>
        </motion.div>

        {/* Demo Interface */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Detection Feed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NTYwMzY0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Detection dashboard"
                  className="w-full h-[500px] object-cover opacity-70"
                />
                
                {/* Detection Overlays */}
                <div className="absolute inset-0">
                  {/* Status Bar */}
                  <div className="absolute top-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#11DD88] rounded-full animate-pulse"></div>
                        <span className="text-white">Live Detection Active</span>
                      </div>
                      <div className="text-white">FPS: 30</div>
                    </div>
                  </div>

                  {/* Bounding Boxes */}
                  <div className="absolute top-32 left-20 w-28 h-36 border-2 border-[#11DD88] rounded-lg">
                    <div className="absolute -top-7 left-0 bg-[#11DD88] text-black px-2 py-1 rounded">
                      ID: 001
                    </div>
                  </div>
                  <div className="absolute top-40 right-32 w-24 h-32 border-2 border-[#0066FF] rounded-lg">
                    <div className="absolute -top-7 left-0 bg-[#0066FF] text-white px-2 py-1 rounded">
                      ID: 002
                    </div>
                  </div>
                  <div className="absolute bottom-28 left-1/3 w-26 h-34 border-2 border-[#11DD88] rounded-lg">
                    <div className="absolute -top-7 left-0 bg-[#11DD88] text-black px-2 py-1 rounded">
                      ID: 003
                    </div>
                  </div>

                  {/* Density Grid Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0066FF]/30 via-[#11DD88]/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* People Count Card */}
            <div className="bg-gradient-to-br from-[#0066FF] to-[#0055DD] rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6" />
                <span className="text-white/90">People Count</span>
              </div>
              <div className="mb-2">45</div>
              <div className="text-white/80">Current occupancy</div>
            </div>

            {/* Density Level Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-[#11DD88]" />
                <span className="text-gray-900">Density Level</span>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-[#11DD88]">Medium</span>
                  <span className="text-gray-500">(52%)</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-[#11DD88] to-[#0066FF] h-3 rounded-full" style={{ width: '52%' }}></div>
              </div>
            </div>

            {/* Risk Status Card */}
            <div className="bg-[#11DD88]/10 rounded-2xl p-6 border border-[#11DD88]/30">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-[#11DD88]" />
                <span className="text-gray-900">Risk Status</span>
              </div>
              <div className="mb-2 text-[#11DD88]">Low Risk</div>
              <div className="text-gray-600">All parameters normal</div>
            </div>

            {/* Density Graph */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-gray-900 mb-4">Density Trend</h3>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={densityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="time" stroke="#6b7280" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: 'none', 
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="density" 
                    stroke="#0066FF" 
                    strokeWidth={3}
                    dot={{ fill: '#0066FF', r: 4 }}
                    activeDot={{ r: 6, fill: '#11DD88' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
