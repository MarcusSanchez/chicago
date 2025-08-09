import { Users, Clock, Target, DollarSign, BookOpen } from 'lucide-react';

export default function IndividualSessions() {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-yellow-400/10 text-yellow-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-yellow-400/20">
          <Users className="w-5 h-5 mr-3" />
          Individual Sessions
        </div>
        <h3 className="text-3xl font-bold text-[#002552] mb-4">
          One-on-One Career Coaching
        </h3>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Personalized, focused sessions designed to address your specific career challenges
          and accelerate your professional growth with targeted expertise.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Career Clarity */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 bg-[#002552] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-yellow-400" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#002552]">$75</div>
              <p className="text-yellow-600 text-sm font-medium">60 minutes</p>
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-[#002552] mb-4">Career Clarity & Goal Setting</h4>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Identify core strengths and values</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Define clear career objectives</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Create actionable next steps</span>
            </li>
          </ul>
          
          <button className="w-full bg-[#002552] text-white py-4 rounded-xl font-semibold hover:bg-[#001a3d] transition-colors shadow-lg hover:shadow-xl">
            Book Session
          </button>
        </div>

        {/* Job Search Strategy */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 bg-[#002552] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Users className="w-7 h-7 text-yellow-400" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#002552]">$75</div>
              <p className="text-gray-600 text-sm font-medium">60 minutes</p>
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-[#002552] mb-4">Strategic Job Search Session</h4>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Develop targeted job search strategy</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Optimize networking approach</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">AI-ready job search techniques</span>
            </li>
          </ul>
          
          <button className="w-full bg-[#002552] text-white py-4 rounded-xl font-semibold hover:bg-[#001a3d] transition-colors shadow-lg hover:shadow-xl">
            Book Session
          </button>
        </div>

        {/* Interview Coaching */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 bg-[#002552] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Users className="w-7 h-7 text-yellow-400" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#002552]">$90</div>
              <p className="text-gray-600 text-sm font-medium">75 minutes</p>
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-[#002552] mb-4">Interview Coaching + Mock Interview</h4>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Practice with realistic mock interviews</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Detailed feedback and improvement tips</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Confidence building techniques</span>
            </li>
          </ul>
          
          <button className="w-full bg-[#002552] text-white py-4 rounded-xl font-semibold hover:bg-[#001a3d] transition-colors shadow-lg hover:shadow-xl">
            Book Session
          </button>
        </div>

        {/* Resume & LinkedIn */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 bg-[#002552] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-7 h-7 text-yellow-400" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#002552]">$85</div>
              <p className="text-gray-600 text-sm font-medium">60 minutes</p>
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-[#002552] mb-4">Resume or LinkedIn Strategy</h4>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Professional resume optimization</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">LinkedIn profile enhancement</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">ATS-friendly formatting</span>
            </li>
          </ul>
          
          <button className="w-full bg-[#002552] text-white py-4 rounded-xl font-semibold hover:bg-[#001a3d] transition-colors shadow-lg hover:shadow-xl">
            Book Session
          </button>
        </div>

        {/* Salary Negotiation */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 bg-[#002552] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-7 h-7 text-yellow-400" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#002552]">$60</div>
              <p className="text-gray-600 text-sm font-medium">45 minutes</p>
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-[#002552] mb-4">Salary Negotiation Coaching</h4>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Market research and benchmarking</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Negotiation strategy development</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Practice negotiation scenarios</span>
            </li>
          </ul>
          
          <button className="w-full bg-[#002552] text-white py-4 rounded-xl font-semibold hover:bg-[#001a3d] transition-colors shadow-lg hover:shadow-xl">
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
}