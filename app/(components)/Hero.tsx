import { ArrowRight, Award, Star, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-115px)] flex items-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "linear-gradient(rgba(0, 37, 82, 0.7), rgba(0, 37, 82, 0.7)), url('/skyline.jpg')" }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Elevate Your
              <span className="block text-yellow-400">Career Journey</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Professional coaching services designed to unlock your potential and accelerate your success from the heart of Chicago's dynamic business landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-yellow-400 text-[#002552] px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center group">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#002552] transition-colors">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-3xl font-bold">500+</span>
                </div>
                <p className="text-gray-300 text-sm">Clients Coached</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-3xl font-bold">4.9</span>
                </div>
                <p className="text-gray-300 text-sm">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-3xl font-bold">10+</span>
                </div>
                <p className="text-gray-300 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Career?</h3>
              <p className="text-gray-200 mb-6">Join hundreds of Chicago professionals who have accelerated their careers with our proven coaching methodology.</p>
              <div className="space-y-3">
                <div className="flex items-center text-white">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>
                    Career Strategy & Planning
                  </span>
                </div>
                <div className="flex items-center text-white">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Interview & Salary Negotation Mastery</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Interview & Negotiation Mastery</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Workforce Resilience Programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}