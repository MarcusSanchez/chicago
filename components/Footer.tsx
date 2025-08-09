import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#002552] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image src="/ccc-logo.jpg" alt="Chicago Career Collective" width={48} height={48} className="h-12 w-auto mr-3" />
              <div>
                <h3 className="text-xl font-bold">Chicago Career Collective</h3>
                <p className="text-sm text-gray-300">Professional Coaching Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering Chicago professionals with personalized career coaching, strategic guidance, 
              and AI-ready solutions for the future of work.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services#career-coaching" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Career Coaching
                </Link>
              </li>
              <li>
                <Link href="/services#interview-prep" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Interview Preparation
                </Link>
              </li>
              <li>
                <Link href="/services#resume-linkedin" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Resume & LinkedIn
                </Link>
              </li>
              <li>
                <Link href="/services#ai-services" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  AI-Driven Services
                </Link>
              </li>
              <li>
                <Link href="/services#group-coaching" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Group Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Chicago, IL</p>
                  <p className="text-gray-400 text-sm">Serving professionals nationwide</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <Link href="tel:+13125550123" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  (312) 555-0123
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <Link href="mailto:info@chicagocareercollective.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  info@chicagocareercollective.com
                </Link>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-3 text-yellow-400">Office Hours</h5>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 Chicago Career Collective, LLC. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}