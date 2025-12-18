import { motion } from 'framer-motion';
import { GraduationCap, Music, Building2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const useCases = [
  {
    icon: GraduationCap,
    title: 'Campuses & Universities',
    description: 'Monitor student gathering areas, libraries, and campus events to ensure safe occupancy levels.',
    image: 'https://images.unsplash.com/photo-1761582253762-9b595a4fc92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYWVyaWFsfGVufDF8fHx8MTc2NTY1NDI4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: '500+ Institutions',
    href: '#'
  },
  {
    icon: Music,
    title: 'Events & Festivals',
    description: 'Real-time crowd management for concerts, festivals, and large gatherings to prevent overcrowding.',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MXx8fHwxNzY1NjQwNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: '1000+ Events',
    href: '#'
  },
  {
    icon: Building2,
    title: 'Public Spaces & Malls',
    description: 'Track foot traffic and density in retail spaces, transit hubs, and public buildings.',
    image: 'https://images.unsplash.com/photo-1694064500485-405140238c9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjU2MzY4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: '250+ Locations',
    
  },
];

export function UseCases() {
  return (
    <section className="py-24 bg-gray-50" id="use-cases">
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
            Use Cases
          </div>
          <h2 className="text-gray-900 mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SmartCrowd delivers safety and insights for diverse environments and applications.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <useCase.icon className="w-6 h-6 text-[#0066FF]" />
                </div>

                {/* Stats Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-gray-900">{useCase.stats}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
