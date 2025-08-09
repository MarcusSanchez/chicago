import Link from 'next/link';
import { ArrowRight, Users, Award, Heart, Target } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#fefaf7] via-white to-[#fff9f5] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-400/10 text-yellow-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm border border-yellow-400/20">
            <Users className="w-5 h-5 mr-3" />
            About Chicago Career Collective
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#002552] mb-6">
            Empowering Professionals to
            <span className="block text-yellow-500">Thrive in Their Careers</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            Founded by career development expert Rodney Matthews, we combine decades of experience 
            with a passion for helping professionals navigate and succeed in today's evolving workplace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-[#002552] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#001a3d] transition-colors flex items-center justify-center group">
              Meet Our Founder
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link href="/services" className="border-2 border-[#002552] text-[#002552] px-8 py-4 rounded-lg font-semibold hover:bg-[#002552] hover:text-white transition-colors text-center">
              Explore Our Services
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-[#002552]" />
            </div>
            <div className="text-3xl font-bold text-[#002552] mb-2">500+</div>
            <h3 className="text-lg font-semibold text-[#002552] mb-3">Lives Transformed</h3>
            <p className="text-gray-600 leading-relaxed">
              Professionals across diverse industries who've achieved their career goals through our personalized coaching approach.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-[#002552] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-[#002552] mb-2">20+</div>
            <h3 className="text-lg font-semibold text-[#002552] mb-3">Years of Expertise</h3>
            <p className="text-gray-600 leading-relaxed">
              Deep experience in career development, from peer advising beginnings to master-level certification and beyond.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-[#002552]" />
            </div>
            <div className="text-3xl font-bold text-[#002552] mb-2">NCDA</div>
            <h3 className="text-lg font-semibold text-[#002552] mb-3">Certified Master</h3>
            <p className="text-gray-600 leading-relaxed">
              National Career Development Association certification ensuring the highest standards of professional career coaching.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}