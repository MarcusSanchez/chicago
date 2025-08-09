import { ArrowRight, MessageSquare, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ContactHero() {
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
            <MessageSquare className="w-5 h-5 mr-3" />
            Get In Touch
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#002552] mb-6">
            Ready to Transform
            <span className="block text-yellow-500">Your Career?</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            Take the first step towards your professional transformation. We're here to provide personalized 
            guidance and proven strategies to help you achieve your career goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-[#002552] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#001a3d] transition-colors flex items-center justify-center group">
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-[#002552] text-[#002552] px-8 py-4 rounded-lg font-semibold hover:bg-[#002552] hover:text-white transition-colors">
              Send Message Now
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-[#002552]" />
            </div>
            <h3 className="text-lg font-semibold text-[#002552] mb-3">Call Us Today</h3>
            <p className="text-2xl font-bold text-[#002552] mb-2">(312) 555-0123</p>
            <p className="text-gray-600 text-sm mb-4">Available Monday - Friday, 9am - 6pm CST</p>
            <div className="flex items-center justify-center">
              <Clock className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-sm text-gray-600">24hr response guarantee</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-[#002552] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-lg font-semibold text-[#002552] mb-3">Email Us</h3>
            <p className="text-lg font-bold text-[#002552] mb-2">hello@chicagocareer.com</p>
            <p className="text-gray-600 text-sm mb-4">Professional inquiries and consultations</p>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-600">Quick response team</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-[#002552]" />
            </div>
            <h3 className="text-lg font-semibold text-[#002552] mb-3">Visit Us</h3>
            <p className="text-lg font-bold text-[#002552] mb-2">Chicago, IL</p>
            <p className="text-gray-600 text-sm mb-4">Virtual meetings available worldwide</p>
            <div className="flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-blue-500 mr-2" />
              <span className="text-sm text-gray-600">In-person & remote options</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}