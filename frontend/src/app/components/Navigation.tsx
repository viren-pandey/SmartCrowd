import { Users } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#11DD88] flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-900">SmartCrowd</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-900 hover:text-[#0066FF] transition-colors">
              Home
            </a>
            <a href="https://smartcrowd1.netlify.app/" className="text-gray-600 hover:text-[#0066FF] transition-colors">
              Live Detection
            </a>
            <a href="#about" className="text-gray-600 hover:text-[#0066FF] transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-[#0066FF] transition-colors">
              Contact
            </a>
          </div>

          {/* CTA */}
          <Button className="bg-[#0066FF] hover:bg-[#0055DD] text-white rounded-full px-6">
            <a href="https://smartcrowd1.netlify.app/">Try Live Demo</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
