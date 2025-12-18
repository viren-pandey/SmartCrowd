import { Users, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Live Detection', href: 'https://smartcrowd1.netlify.app/' },
    // { label: 'Dashboard', href: '#dashboard' },
    { label: 'Documentation', href: 'https://smartcrowd.bitdocs.ai/share/d/tCPJ2BsyQwv9qfQk' },
    { label: 'API Reference', href: 'https://virenn77-smartcrowd-backend.hf.space/docs' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    // { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
    // { label: 'Blog', href: '#blog' },
  ],
  legal: [
    { label: 'Fully maintained by Busters', href: '#privacy' },
    // { label: 'Terms of Service', href: '#terms' },
    // { label: 'Security', href: '#security' },
    // { label: 'Compliance', href: '#compliance' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/viren-pandey', label: 'GitHub' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#11DD88] flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-white">SmartCrowd</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              AI-powered real-time crowd density detection and safety monitoring system for modern spaces.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-[#0066FF] rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#11DD88] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#11DD88] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#11DD88] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
               Made with Love By Viren Pandey 
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} SmartCrowd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-gray-400 hover:text-[#11DD88] transition-colors">
                Privacy and enscription is maintained.
              </a>
              {/* <a href="#terms" className="text-gray-400 hover:text-[#11DD88] transition-colors">
                Terms
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-[#11DD88] transition-colors">
                Cookies
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
