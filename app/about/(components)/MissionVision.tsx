import { Target, Users, Heart, Compass, Lightbulb, Shield } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#fefaf7] via-white to-[#fff9f5] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-yellow-50 text-[#002552] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-yellow-200">
            <Compass className="w-5 h-5 mr-3 text-yellow-600" />
            Mission & Vision
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002552] mb-6">
            The Foundation of
            <span className="block text-yellow-500">Our Purpose</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium">
            Empowering careers through strategic guidance, inclusive excellence, and transformative growth 
            in today's dynamic professional landscape.
          </p>
        </div>

        <div className="relative mb-24">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center z-10 hidden lg:flex shadow-2xl border-4 border-white">
            <div className="w-10 h-10 bg-[#002552] rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-yellow-400" />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-white via-yellow-50/50 to-white rounded-3xl p-12 shadow-2xl border border-yellow-100/50 h-full backdrop-blur-sm">
                <div className="flex items-center mb-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mr-8 shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <Target className="w-12 h-12 text-[#002552]" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-[#002552] mb-3">Our Mission</h3>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed font-medium">
                  To empower professionals through strategic, equity-centered career development that transforms 
                  potential into purpose. We create personalized pathways for growth, ensuring every individual 
                  has the tools and confidence to thrive in their chosen field.
                </p>
                <div className="space-y-5">
                  <div className="flex items-start group/item">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-5 mt-1 flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-200">
                      <Lightbulb className="w-4 h-4 text-[#002552]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002552] mb-2 text-lg">Personalized Excellence</h4>
                      <p className="text-gray-600">Tailored coaching strategies that honor your unique journey, strengths, and aspirations</p>
                    </div>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-5 mt-1 flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-200">
                      <Target className="w-4 h-4 text-[#002552]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002552] mb-2 text-lg">Strategic Innovation</h4>
                      <p className="text-gray-600">Forward-thinking approaches that prepare you for emerging opportunities and industry shifts</p>
                    </div>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-5 mt-1 flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-200">
                      <Shield className="w-4 h-4 text-[#002552]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002552] mb-2 text-lg">Inclusive Impact</h4>
                      <p className="text-gray-600">Creating equitable access to career advancement for professionals from all backgrounds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-[#002552] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-white rounded-3xl p-12 shadow-2xl border border-blue-100/50 h-full backdrop-blur-sm">
                <div className="flex items-center mb-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#002552] via-[#003875] to-[#004c99] rounded-2xl flex items-center justify-center mr-8 shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <Users className="w-12 h-12 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-[#002552] mb-3">Our Vision</h3>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-[#002552] to-[#004c99] rounded-full"></div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed font-medium">
                  A world where every professional possesses the confidence, skills, and strategic mindset to 
                  navigate change with resilience—turning career challenges into catalysts for extraordinary growth 
                  and meaningful impact.
                </p>
                <div className="space-y-5">
                  <div className="flex items-start group/item">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#002552] to-[#004c99] rounded-full flex items-center justify-center mr-5 mt-1 flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-200">
                      <Compass className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002552] mb-2 text-lg">Future-Focused Leadership</h4>
                      <p className="text-gray-600">Preparing visionaries who thrive in AI-enhanced industries and drive meaningful change</p>
                    </div>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#002552] to-[#004c99] rounded-full flex items-center justify-center mr-5 mt-1 flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-200">
                      <Users className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002552] mb-2 text-lg">Barrier-Breaking Excellence</h4>
                      <p className="text-gray-600">Dismantling systemic obstacles to create pathways for underrepresented talent to flourish</p>
                    </div>
                  </div>
                  <div className="flex items-start group/item">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#002552] to-[#004c99] rounded-full flex items-center justify-center mr-5 mt-1 flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-200">
                      <Heart className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002552] mb-2 text-lg">Transformational Impact</h4>
                      <p className="text-gray-600">Building resilient professionals who lead with purpose and create positive change</p>
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