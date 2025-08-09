import { Zap, Target, BookOpen, Clock } from 'lucide-react';

export default function AIDrivenServices() {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-yellow-400/10 text-yellow-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-yellow-400/20">
          <Zap className="w-5 h-5 mr-3" />
          AI-Driven Services
        </div>
        <h3 className="text-3xl font-bold text-[#002552] mb-4">Future-Ready Career Solutions</h3>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Stay ahead with cutting-edge AI tools and strategies designed to future-proof your career
          in an evolving digital landscape.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 bg-[#002552] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-yellow-400" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#002552]">$135</div>
              <p className="text-gray-600 text-sm font-medium">2 sessions + edits</p>
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-[#002552] mb-4">AI Resume + LinkedIn Overhaul</h4>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">AI-optimized resume writing</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">LinkedIn profile enhancement</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Custom tools & templates</span>
            </li>
          </ul>
          
          <button className="w-full bg-[#002552] text-white py-4 rounded-xl font-semibold hover:bg-[#001a3d] transition-colors shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>

        <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 bg-[#002552] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-yellow-400" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#002552]">$65</div>
              <p className="text-gray-600 text-sm font-medium">60 minutes, 1:1</p>
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-[#002552] mb-4">AI Tools for Job Seekers</h4>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">ChatGPT for job search</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">AI networking strategies</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Personalized AI toolkit</span>
            </li>
          </ul>
          
          <button className="w-full bg-[#002552] text-white py-4 rounded-xl font-semibold hover:bg-[#001a3d] transition-colors shadow-lg hover:shadow-xl">
            Learn More
          </button>
        </div>

        <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 bg-[#002552] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-7 h-7 text-yellow-400" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#002552]">$50</div>
              <p className="text-gray-600 text-sm font-medium">Setup & training</p>
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-[#002552] mb-4">Job Search Automation</h4>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Teal job tracker setup</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Automated application tracking</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Keyword guides included</span>
            </li>
          </ul>
          
          <button className="w-full bg-[#002552] text-white py-4 rounded-xl font-semibold hover:bg-[#001a3d] transition-colors shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}