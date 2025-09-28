import { ArrowRight, Lightbulb } from 'lucide-react';

export default function Introduction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-yellow-400/10 text-yellow-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-yellow-400/20">
              <Lightbulb className="w-5 h-5 mr-3" />
              Our Philosophy
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#002552] mb-6 leading-tight">
              Rooted in Equity.
              <span className="block text-yellow-500">Powered by Strategy.</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              At Chicago Career Collective, we offer a thoughtful, human-centered approach to career development
              rooted in strategy, equity, and real transformation.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-[#002552] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#002552] mb-2">Future-Ready Career Development</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We're committed to helping individuals pivot, upskill, and retrain to remain competitive
                    as automation and AI reshape industries.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-[#002552] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#002552] mb-2">Diverse Professional Support</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you're exploring tech, transitioning from the arts, or navigating career uncertainties,
                    we're here to help you embrace new opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-[#002552] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#002552] mb-2">Personalized Strategy</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We believe that everyone has the potential to achieve their career goals through
                    tailored coaching and strategic guidance.
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-[#002552] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#001a3d] transition-colors inline-flex items-center group">
              Learn About Our Approach
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#002552] to-[#001a3d] rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/10 rounded-full -ml-12 -mb-12"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                    <p className="text-gray-300 text-sm">Professionals Coached</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">92%</div>
                    <p className="text-gray-300 text-sm">Success Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
                    <p className="text-gray-300 text-sm">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">4.9</div>
                    <p className="text-gray-300 text-sm">Average Rating</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h4 className="font-semibold mb-4">Core Specialties</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-sm">
                        Future-Ready Career Strategies
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-sm">
                        Career Navigation & Transitions
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-sm">
                        Professional Growth & Advancement
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-sm">
                        Interview & Salary Negotiation Confidence
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-sm">
                        Career Clarity & Discernment
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-sm">
                        Professional Branding & LinkedIn Strategy
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-sm">
                        Workforce Development Solutions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}