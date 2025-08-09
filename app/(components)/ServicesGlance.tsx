import { ArrowRight, Target, Users, BookOpen, Zap, Clock, Briefcase } from 'lucide-react';

export default function ServicesGlance() {
  return (
    <section className="py-20 bg-[#fefaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-[#002552]/10 text-[#002552] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-[#002552]/20">
              <Briefcase className="w-5 h-5 mr-3" />
              Our Core Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#002552] mb-6 leading-tight">
              Expert Guidance for
              <span className="block text-yellow-500">Every Career Stage</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Whether you're seeking clarity on your next step or ready to level up your job search, 
              we offer expert guidance to help you move forward with confidence in a tech-forward 
              and AI-augmented world.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="w-6 h-6 text-[#002552]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#002552] mb-2">Career Assessment</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Uncover your strengths and direction with comprehensive assessments
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-[#002552]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#002552] mb-2">Job Search Strategy</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Strategic coaching to target roles that remain relevant as technology evolves
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-[#002552]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#002552] mb-2">Interview Coaching</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Stand out in competitive and increasingly automated hiring processes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#002552]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#002552] mb-2">Resume & LinkedIn</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Showcase transferable skills with future-ready professional profiles
                  </p>
                </div>
              </div>
            </div>
            
            <button className="bg-[#002552] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#001a3d] transition-colors inline-flex items-center group">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Right Visual - AI Services Highlight */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#002552]/5 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center bg-gradient-to-r from-[#002552] to-[#001a3d] text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-white/20">
                  <Zap className="w-5 h-5 mr-3" />
                  AI-Powered Services
                </div>
                <h3 className="text-2xl font-bold text-[#002552] mb-4">
                  Future-Proof Your Career
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Stay ahead of the curve with our specialized AI-driven career support services, 
                  designed to help you navigate and leverage technology in your career journey.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center bg-gray-50 rounded-lg p-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                      <Zap className="w-4 h-4 text-[#002552]" />
                    </div>
                    <span className="text-gray-700 font-medium">AI Resume + LinkedIn Overhaul</span>
                  </div>
                  <div className="flex items-center bg-gray-50 rounded-lg p-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                      <Target className="w-4 h-4 text-[#002552]" />
                    </div>
                    <span className="text-gray-700 font-medium">AI Tools for Job Seekers</span>
                  </div>
                  <div className="flex items-center bg-gray-50 rounded-lg p-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                      <Clock className="w-4 h-4 text-[#002552]" />
                    </div>
                    <span className="text-gray-700 font-medium">Job Search Automation</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#002552] to-[#001a3d] rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold mb-1">$135</div>
                      <p className="text-gray-300 text-sm">AI Resume Package</p>
                    </div>
                    <button className="bg-yellow-400 text-[#002552] px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors text-sm">
                      Learn More
                    </button>
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