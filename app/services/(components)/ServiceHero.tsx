import { ArrowRight, Target, DollarSign, Users, Star, Award, CheckCircle, Zap } from 'lucide-react';

export default function ServiceHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#fefaf7] via-white to-[#fff9f5] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-400/10 text-yellow-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-yellow-400/20">
            <Target className="w-5 h-5 mr-3" />
            Our Services & Pricing
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#002552] mb-6">
            Professional Career Coaching
            <span className="block text-yellow-500">That Gets Results</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            Transparent pricing, personalized strategies, and proven outcomes. Choose from individual sessions, 
            comprehensive packages, or AI-driven services designed to accelerate your career transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-[#002552] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#001a3d] transition-colors flex items-center justify-center group">
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-[#002552] text-[#002552] px-8 py-4 rounded-lg font-semibold hover:bg-[#002552] hover:text-white transition-colors">
              Explore All Services
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-[#002552]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#002552] mb-1">Individual Sessions</h3>
                <p className="text-2xl font-bold text-yellow-500">$60-$90</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">Personalized 1:1 coaching tailored to your specific career goals and challenges.</p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                45-75 minute focused sessions
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                Immediate actionable insights
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                Flexible scheduling options
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#002552] to-[#001a3d] rounded-2xl p-8 shadow-2xl text-white relative hover:shadow-3xl transition-all duration-300 group hover:-translate-y-2 border-4 border-yellow-400">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-[#002552] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </span>
            </div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-[#002552]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Package Deals</h3>
                <p className="text-2xl font-bold text-yellow-400">Save $70+</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6">Comprehensive bundles with sustained support for your career transformation.</p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-200">
                <CheckCircle className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                3+ sessions with email support
              </div>
              <div className="flex items-center text-sm text-gray-200">
                <CheckCircle className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                6-month validity period
              </div>
              <div className="flex items-center text-sm text-gray-200">
                <CheckCircle className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                Priority booking access
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#002552] mb-1">AI-Driven Services</h3>
                <p className="text-2xl font-bold text-purple-500">$50-$135</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">Future-ready strategies using cutting-edge AI tools and automation.</p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                AI-optimized resumes & LinkedIn
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                Job search automation tools
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                Personalized AI toolkit
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#002552] via-[#003875] to-[#002552] rounded-3xl p-12 text-white text-center shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl">
                <Award className="w-10 h-10 text-[#002552]" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Chicago Career Collective?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <p className="text-gray-200">Careers Transformed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">92%</div>
                <p className="text-gray-200">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">20+</div>
                <p className="text-gray-200">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">24hrs</div>
                <p className="text-gray-200">Response Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}