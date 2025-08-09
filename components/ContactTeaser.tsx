import { ArrowRight } from 'lucide-react';

export default function ContactTeaser() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Take the Next Step in Your
              <span className="block text-yellow-400">Professional Journey</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              Ready to unlock your career potential? Our expert coaching team is here to guide you
              through every step of your professional transformation.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Schedule a consultation today and discover how personalized career coaching
              can accelerate your path to success.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-[#002552] px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center group">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
