import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-[#002552] to-[#001a3d] rounded-2xl p-12 text-center text-white">
      <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
      <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
        Choose the service that best fits your needs, or schedule a consultation to discuss
        a customized approach to your career development.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-yellow-400 text-[#002552] px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center group">
          Schedule Your Consultation
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
}