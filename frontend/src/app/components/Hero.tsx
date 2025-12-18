import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-gray-900 mb-6">
              Smarter Safety for Crowded Spaces
            </h1>
            <p className="text-gray-600 mb-8 max-w-xl">
              AI-powered real-time crowd density detection, risk alerts, and visual analytics.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#0066FF] hover:bg-[#0055DD] text-white rounded-full px-8 py-6">
                <a href="https://smartcrowd1.netlify.app" target='_blank'>Start Live Detection</a>
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Product Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
              <div>
                <div className="text-gray-900 mb-1">99.8%</div>
                <div className="text-gray-500">Accuracy</div>
              </div>
              <div>
                <div className="text-gray-900 mb-1">&lt;50ms</div>
                <div className="text-gray-500">Response Time</div>
              </div>
              <div>
                <div className="text-gray-900 mb-1">24/7</div>
                <div className="text-gray-500">Monitoring</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762698070244-731ae64e5ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm93ZCUyMHN1cnZlaWxsYW5jZSUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzY1NzAxOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Crowd monitoring"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Detection Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                {/* Bounding Boxes */}
                <div className="absolute top-20 left-16 w-24 h-32 border-2 border-[#11DD88] rounded-lg animate-pulse">
                  <div className="absolute -top-6 left-0 bg-[#11DD88] text-black px-2 py-1 rounded text-xs">
                    Person 1 0.87
                  </div>
                </div>
                <div className="absolute top-24 right-20 w-20 h-28 border-2 border-[#11DD88] rounded-lg animate-pulse" style={{ animationDelay: '0.3s' }}>
                  <div className="absolute -top-6 left-0 bg-[#11DD88] text-black px-2 py-1 rounded text-xs">
                    Person 2 0.87
                  </div>
                </div>
                <div className="absolute bottom-32 left-32 w-22 h-30 border-2 border-[#0066FF] rounded-lg animate-pulse" style={{ animationDelay: '0.6s' }}>
                  <div className="absolute -top-6 left-0 bg-[#0066FF] text-white px-2 py-1 rounded text-xs">
                    Shirt 0.59
                  </div>
                </div>

                {/* Density Heatmap Indicator */}
                <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="text-white">Density:</div>
                    <div className="flex gap-1">
                      <div className="w-3 h-8 bg-[#11DD88] rounded"></div>
                      <div className="w-3 h-10 bg-[#11DD88] rounded"></div>
                      <div className="w-3 h-12 bg-yellow-400 rounded"></div>
                      <div className="w-3 h-14 bg-orange-500 rounded"></div>
                      <div className="w-3 h-10 bg-[#0066FF] rounded"></div>
                    </div>
                  </div>
                </div>

                {/* People Count */}
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
                  <div className="text-white">
                    <span className="text-[#11DD88] mr-2">●</span>
                    <span className="mr-2">Count:</span>
                    <span>12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Alert Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#11DD88] rounded-full animate-pulse"></div>
                <div>
                  <div className="text-gray-900">Status: Safe</div>
                  <div className="text-gray-500">Low Density</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
