import Link from 'next/link';
import { CheckCircle, Clock } from 'lucide-react';

export default function ContactActions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#002552] mb-4">What's Next?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Thank you for reaching out! We're excited to help you transform your career.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-[#002552]" />
            </div>
            <h3 className="text-lg font-semibold text-[#002552] mb-2">Quick Response</h3>
            <p className="text-gray-600">
              We'll get back to you within 24 hours with next steps
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-[#002552] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-lg font-semibold text-[#002552] mb-2">Personalized Plan</h3>
            <p className="text-gray-600">
              Receive a tailored approach designed for your goals
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            While you wait, explore what we can do for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-[#002552] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#001a3d] transition-colors"
            >
              View Our Services
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-[#002552] text-[#002552] px-8 py-3 rounded-lg font-semibold hover:bg-[#002552] hover:text-white transition-colors"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}