import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Menu, Phone } from 'lucide-react';

export default function Header() {
  return (
    <>
      {/* Contact Info Bar */}
      <div className="bg-[#001a3d] py-2 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Chicago, IL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(312) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@chicagocareercollective.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-gray-300">Rooted in Chicago, Serving Professionals Nationwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="bg-[#002552] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image src="/ccc-logo.jpg" alt="Chicago Career Collective" width={48} height={48} className="h-12 w-auto mr-3" />
              <div>
                <h1 className="text-xl font-bold">Chicago Career Collective</h1>
                <p className="text-sm text-gray-300">Professional Coaching Services</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-gray-300 transition-colors font-medium">Home</Link>
              <Link href="/services" className="hover:text-gray-300 transition-colors font-medium">Services</Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors font-medium">About</Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors font-medium">Contact</Link>
            </nav>
            <div className="md:hidden">
              <button className="text-white hover:text-gray-300 transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}