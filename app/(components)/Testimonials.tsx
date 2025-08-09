import { ArrowRight, Users, Star, Award } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#fefaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-100 text-[#002552] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-yellow-200">
            <Users className="w-5 h-5 mr-3" />
            Client Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002552] mb-6 leading-tight">
            Real Results from
            <span className="block text-yellow-500">Chicago Professionals</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover how our personalized coaching approach has helped professionals across Chicago 
            transform their careers, achieve their goals, and unlock their full potential in today's competitive market.
          </p>
        </div>
        
        {/* First Row of Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
            <div className="absolute top-6 right-6">
              <div className="text-6xl font-bold text-yellow-400 opacity-20">"</div>
            </div>
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-gray-700 mb-8 italic text-lg leading-relaxed">
              "The Chicago Career Collective transformed my approach to leadership. Within six months of coaching, I was promoted to Director and gained the confidence to lead a team of 15. The personalized strategies were game-changing."
            </blockquote>
            <div className="flex items-center mt-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-4 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">SJ</span>
              </div>
              <div>
                <p className="font-semibold text-[#002552] text-lg">Sarah Johnson</p>
                <p className="text-gray-600 text-sm">Marketing Director</p>
                <p className="text-gray-500 text-sm">Tech Startup</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
            <div className="absolute top-6 right-6">
              <div className="text-6xl font-bold text-yellow-400 opacity-20">"</div>
            </div>
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-gray-700 mb-8 italic text-lg leading-relaxed">
              "After feeling stuck in my career for years, the coaching program helped me identify my strengths and navigate a successful transition to a senior role. The ROI on this investment has been incredible."
            </blockquote>
            <div className="flex items-center mt-6">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mr-4 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">MC</span>
              </div>
              <div>
                <p className="font-semibold text-[#002552] text-lg">Michael Chen</p>
                <p className="text-gray-600 text-sm">Senior Software Engineer</p>
                <p className="text-gray-500 text-sm">Fortune 500 Company</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
            <div className="absolute top-6 right-6">
              <div className="text-6xl font-bold text-yellow-400 opacity-20">"</div>
            </div>
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-gray-700 mb-8 italic text-lg leading-relaxed">
              "The interview preparation and salary negotiation coaching resulted in a 40% salary increase and a role that perfectly aligns with my career goals. I couldn't have done it without their expert guidance."
            </blockquote>
            <div className="flex items-center mt-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mr-4 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">JR</span>
              </div>
              <div>
                <p className="font-semibold text-[#002552] text-lg">Jennifer Rodriguez</p>
                <p className="text-gray-600 text-sm">Operations Manager</p>
                <p className="text-gray-500 text-sm">Healthcare Organization</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Row of Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
            <div className="absolute top-6 right-6">
              <div className="text-6xl font-bold text-yellow-400 opacity-20">"</div>
            </div>
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-gray-700 mb-8 italic text-lg leading-relaxed">
              "The networking strategies and personal branding work opened doors I never knew existed. I've built meaningful professional relationships that continue to benefit my career growth."
            </blockquote>
            <div className="flex items-center mt-6">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full mr-4 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">DT</span>
              </div>
              <div>
                <p className="font-semibold text-[#002552] text-lg">David Thompson</p>
                <p className="text-gray-600 text-sm">Financial Analyst</p>
                <p className="text-gray-500 text-sm">Investment Firm</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
            <div className="absolute top-6 right-6">
              <div className="text-6xl font-bold text-yellow-400 opacity-20">"</div>
            </div>
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-gray-700 mb-8 italic text-lg leading-relaxed">
              "The executive presence coaching was exactly what I needed to step into a leadership role with confidence. The feedback and practical exercises made all the difference in my professional development."
            </blockquote>
            <div className="flex items-center mt-6">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mr-4 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">LP</span>
              </div>
              <div>
                <p className="font-semibold text-[#002552] text-lg">Lisa Park</p>
                <p className="text-gray-600 text-sm">HR Director</p>
                <p className="text-gray-500 text-sm">Manufacturing Company</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
            <div className="absolute top-6 right-6">
              <div className="text-6xl font-bold text-yellow-400 opacity-20">"</div>
            </div>
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-gray-700 mb-8 italic text-lg leading-relaxed">
              "The career transition support was invaluable when I decided to switch industries. The strategic approach and ongoing support made what seemed impossible feel achievable and exciting."
            </blockquote>
            <div className="flex items-center mt-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full mr-4 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">RK</span>
              </div>
              <div>
                <p className="font-semibold text-[#002552] text-lg">Robert Kim</p>
                <p className="text-gray-600 text-sm">Project Manager</p>
                <p className="text-gray-500 text-sm">Consulting Firm</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success Stats */}
        <div className="bg-gradient-to-br from-[#002552] to-[#001a3d] rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/10 rounded-full -ml-12 -mb-12"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-yellow-400/20 text-yellow-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-yellow-400/30 backdrop-blur-sm">
                <Award className="w-5 h-5 mr-3" />
                Proven Results
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Measurable Success for
                <span className="block text-yellow-400">Chicago Professionals</span>
              </h3>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Our clients consistently achieve their career goals with measurable outcomes 
                that transform their professional trajectories and unlock new opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-3">92%</div>
                  <p className="text-gray-200 font-medium mb-2">Client Success Rate</p>
                  <p className="text-gray-400 text-sm">Achieve their career goals</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-3">35%</div>
                  <p className="text-gray-200 font-medium mb-2">Average Salary Increase</p>
                  <p className="text-gray-400 text-sm">Within 6 months</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-3">6</div>
                  <p className="text-gray-200 font-medium mb-2">Weeks Average Job Search</p>
                  <p className="text-gray-400 text-sm">From start to offer</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-3">500+</div>
                  <p className="text-gray-200 font-medium mb-2">Careers Transformed</p>
                  <p className="text-gray-400 text-sm">Since our founding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}