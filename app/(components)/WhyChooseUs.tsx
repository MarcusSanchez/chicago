import { ArrowRight, Users, Award, Star, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visual Separator */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full mx-4"></div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Visual - Founder Profile */}
          <div>
            <div className="bg-[#fefaf7] rounded-3xl p-8 border border-yellow-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-400/20 rounded-full -ml-12 -mt-12"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#002552]/5 rounded-full -mr-16 -mb-16"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-32 h-40 bg-gray-200 rounded-2xl mx-auto mb-6 flex items-center justify-center overflow-hidden shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <span className="text-gray-600 text-sm font-medium">Rodney Matthews</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002552] mb-2">Meet Your Career Coach</h3>
                  <p className="text-yellow-600 font-semibold mb-4">Founder & Career Development Expert</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                        <Award className="w-5 h-5 text-[#002552]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#002552] text-sm">NCDA Certified Master</h4>
                        <p className="text-gray-600 text-xs">National Career Development Association</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                        <Users className="w-5 h-5 text-[#002552]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#002552] text-sm">20+ Years Experience</h4>
                        <p className="text-gray-600 text-xs">Started as peer advisor at age 20</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                        <Star className="w-5 h-5 text-[#002552]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#002552] text-sm">MBTI Step I Certified</h4>
                        <p className="text-gray-600 text-xs">Myers-Briggs Type Indicator</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#002552] to-[#001a3d] rounded-xl p-6 text-white text-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-yellow-400 mb-1">500+</div>
                      <p className="text-gray-300 text-xs">Clients Coached</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400 mb-1">92%</div>
                      <p className="text-gray-300 text-xs">Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative">
            <div className="inline-flex items-center bg-yellow-400/10 text-yellow-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-yellow-400/20">
              <Heart className="w-5 h-5 mr-3" />
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#002552] mb-6 leading-tight">
              A Personal Story &
              <span className="block text-yellow-500">Personalized Support</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Chicago Career Collective was born from a deeply personal path, rooted in years of experience 
              helping diverse professionals navigate their career journeys with strategy, equity, and real transformation.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-lg font-semibold text-[#002552] mb-6">Our Founder's Journey</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-[#002552] font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#002552] mb-1">Started at Age 20</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      First stepped into career services as a work-study peer advisor at the University of Minnesota, 
                      sparking a lifelong passion for helping others find their professional voice.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-[#002552] font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#002552] mb-1">Diverse Experience</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Worked with diverse populations—from recent grads and mid-career changers to creatives, 
                      tech professionals, and nonprofit leaders across all industries.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-[#002552] font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#002552] mb-1">Human-Centered Mission</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Created this practice to offer thoughtful, personalized career development that prepares 
                      clients to not only survive change, but lead through it in an AI-influenced world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#002552] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#001a3d] transition-colors inline-flex items-center group">
                Learn About Our Founder
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-yellow-400 text-[#002552] px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-[#002552] transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}