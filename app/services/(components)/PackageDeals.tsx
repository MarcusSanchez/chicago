import { DollarSign, Mail, Clock } from 'lucide-react';

export default function PackageDeals() {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-yellow-400/10 text-yellow-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-yellow-400/20">
          <DollarSign className="w-5 h-5 mr-3" />
          Best Value
        </div>
        <h3 className="text-3xl font-bold text-[#002552] mb-4">
          Value Packages & Bundles
        </h3>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Comprehensive coaching bundles that provide greater value and sustained support
          for your career transformation journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Career Pivot Starter */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 bg-[#002552] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-7 h-7 text-yellow-400" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#002552]">$135</div>
              <p className="text-gray-600 text-sm font-medium">2 sessions + support</p>
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-[#002552] mb-4">Career Pivot Starter</h4>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Career clarity session</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Strategic job search session</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Email support for 30 days</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Career transition resources</span>
            </li>
          </ul>
          
          <button className="w-full bg-[#002552] text-white py-4 rounded-xl font-semibold hover:bg-[#001a3d] transition-colors shadow-lg hover:shadow-xl">
            Choose Plan
          </button>
        </div>

        {/* 3-Session Bundle */}
        <div className="bg-white rounded-2xl border-2 border-yellow-300 p-8 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-yellow-400 text-[#002552] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Most Popular
            </span>
          </div>
          
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-7 h-7 text-[#002552]" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#002552]">$200</div>
              <p className="text-yellow-600 text-sm font-medium line-through">$225</p>
              <p className="text-green-600 text-sm font-bold">Save $25</p>
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-[#002552] mb-4">3-Session Bundle</h4>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Choose any 3 individual sessions</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">6-month validity period</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Email support between sessions</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Priority booking</span>
            </li>
          </ul>
          
          <button className="w-full bg-yellow-400 text-[#002552] py-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>

        {/* Complete Career Bundle */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 bg-[#002552] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-7 h-7 text-yellow-400" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#002552]">$180</div>
              <p className="text-gray-600 text-sm font-medium line-through">$250</p>
              <p className="text-green-600 text-sm font-bold">Save $70</p>
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-[#002552] mb-4">Complete Career Bundle</h4>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Resume & LinkedIn optimization</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Interview coaching session</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">2.5 hours total coaching</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-gray-700">Job search toolkit included</span>
            </li>
          </ul>
          
          <button className="w-full bg-[#002552] text-white py-4 rounded-xl font-semibold hover:bg-[#001a3d] transition-colors shadow-lg hover:shadow-xl">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}