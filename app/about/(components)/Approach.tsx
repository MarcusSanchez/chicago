import { Compass, Users, Zap } from 'lucide-react';

export default function Approach() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#fefaf7] via-white to-[#fff9f5] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.04'%3E%3Cpath d='m30 30-10-10h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-400/10 text-yellow-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-yellow-400/20">
            <Compass className="w-5 h-5 mr-3" />
            Our Approach
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002552] mb-6">
            How We Work
            <span className="block text-yellow-500">With You</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Every career journey is unique. We provide personalized support that adapts to your 
            specific needs, goals, and professional context.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group h-full">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border-2 border-yellow-200/50 group-hover:border-yellow-300 transition-colors duration-300 h-full flex flex-col">
              <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#002552]" />
              </div>
              <h4 className="text-2xl font-bold text-[#002552] mb-4">Collaborative Partnership</h4>
              <p className="text-gray-700 leading-relaxed flex-1">
                We work alongside you as partners, not just advisors, creating strategies 
                together through open dialogue and shared insights.
              </p>
            </div>
          </div>
          
          <div className="group h-full">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200/50 group-hover:border-blue-300 transition-colors duration-300 h-full flex flex-col">
              <div className="w-16 h-16 bg-[#002552] rounded-xl flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="text-2xl font-bold text-[#002552] mb-4">Tailored Solutions</h4>
              <p className="text-gray-700 leading-relaxed flex-1">
                No cookie-cutter approaches. Every strategy is customized to your industry, 
                experience level, and personal career aspirations.
              </p>
            </div>
          </div>
          
          <div className="group h-full">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl border-2 border-emerald-200/50 group-hover:border-emerald-300 transition-colors duration-300 h-full flex flex-col">
              <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[#002552] mb-4">Action-Oriented Results</h4>
              <p className="text-gray-700 leading-relaxed flex-1">
                We focus on practical, implementable solutions that drive real progress 
                and measurable improvements in your career trajectory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}