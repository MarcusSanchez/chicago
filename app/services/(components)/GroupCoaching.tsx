import { Users, DollarSign, Target } from 'lucide-react';

export default function GroupCoaching() {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-yellow-400/10 text-yellow-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-yellow-400/20">
          <Users className="w-5 h-5 mr-3" />
          Group Learning
        </div>
        <h3 className="text-3xl font-bold text-[#002552] mb-4">Community Workshops & Programs</h3>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Affordable group sessions for community learning and peer support in a collaborative environment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 text-center">
          <div className="w-12 h-12 bg-[#002552] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <Target className="w-6 h-6 text-yellow-400" />
          </div>
          <h4 className="text-lg font-bold text-[#002552] mb-3">AI & Your Career</h4>
          <div className="text-3xl font-bold text-[#002552] mb-2">$20</div>
          <p className="text-gray-600 text-sm font-medium mb-4">90 minutes</p>
          <button className="w-full bg-[#002552] text-white py-3 rounded-xl font-semibold hover:bg-[#001a3d] transition-colors shadow-lg hover:shadow-xl">
            Join Workshop
          </button>
        </div>

        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 text-center">
          <div className="w-12 h-12 bg-[#002552] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <Users className="w-6 h-6 text-yellow-400" />
          </div>
          <h4 className="text-lg font-bold text-[#002552] mb-3">LinkedIn Lab</h4>
          <div className="text-3xl font-bold text-[#002552] mb-2">$30</div>
          <p className="text-gray-600 text-sm font-medium mb-4">90 minutes</p>
          <button className="w-full bg-[#002552] text-white py-3 rounded-xl font-semibold hover:bg-[#001a3d] transition-colors shadow-lg hover:shadow-xl">
            Join Workshop
          </button>
        </div>

        <div className="bg-white rounded-2xl border-2 border-amber-300 p-6 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 text-center relative">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <span className="bg-amber-400 text-[#002552] px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              Popular
            </span>
          </div>
          <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-lg font-bold text-[#002552] mb-3">Job Search Sprint</h4>
          <div className="text-3xl font-bold text-[#002552] mb-2">$95</div>
          <p className="text-gray-600 text-sm font-medium mb-4">4 weeks</p>
          <button className="w-full bg-amber-400 text-[#002552] py-3 rounded-xl font-bold hover:bg-amber-300 transition-colors shadow-lg hover:shadow-xl">
            Join Program
          </button>
        </div>

        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 text-center">
          <div className="w-12 h-12 bg-[#002552] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <Target className="w-6 h-6 text-yellow-400" />
          </div>
          <h4 className="text-lg font-bold text-[#002552] mb-3">Creative Careers</h4>
          <div className="text-3xl font-bold text-[#002552] mb-2">$35</div>
          <p className="text-gray-600 text-sm font-medium mb-4">Workshop</p>
          <button className="w-full bg-[#002552] text-white py-3 rounded-xl font-semibold hover:bg-[#001a3d] transition-colors shadow-lg hover:shadow-xl">
            Join Workshop
          </button>
        </div>
      </div>
    </div>
  );
}