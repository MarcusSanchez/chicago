import { DollarSign, Clock, Users, Target, BookOpen } from 'lucide-react';

export default function PricingHeader() {
  return (
    <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
      <div className="lg:col-span-2">
        <div className="inline-flex items-center bg-yellow-100 text-[#002552] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-yellow-200">
          <DollarSign className="w-5 h-5 mr-3" />
          Transparent Pricing
        </div>
        <h2 className="text-4xl font-bold text-[#002552] mb-6">
          Choose Your Career Coaching Plan
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Professional career coaching services designed to accelerate your growth. All sessions include
          personalized guidance, actionable strategies, and ongoing support to help you achieve your goals.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm border">
            <Clock className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-sm text-gray-700">Flexible scheduling</span>
          </div>
          <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm border">
            <Users className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-sm text-gray-700">1:1 personalized sessions</span>
          </div>
          <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm border">
            <Target className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-sm text-gray-700">Results-driven approach</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-lg border">
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-[#002552]" />
          </div>
          <h3 className="text-lg font-semibold text-[#002552] mb-2">Free Discovery Call</h3>
          <p className="text-gray-600 text-sm mb-4">
            15-minute consultation to discuss your goals and find the right service for you.
          </p>
          <button className="w-full bg-[#002552] text-white py-3 rounded-lg font-medium hover:bg-[#001a3d] transition-colors">
            Book Free Call
          </button>
        </div>
      </div>
    </div>
  );
}